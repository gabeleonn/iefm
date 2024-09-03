import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export function useUserQuery() {
  const { status: sessionStatus, data: session } = useSession();

  const {
    status: queryStatus,
    data: user,
    isLoading,
  } = useQuery({
    queryKey: ["user", session?.user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`/api/users/${session?.user?.email}`);

      return data;
    },
    select: (data) => (data?.id ? data : null),
    retry: false,
    refetchOnWindowFocus: false,
    enabled: sessionStatus === "authenticated" && !!session?.user?.email,
  });

  return {
    user,
    isAuthenticated: sessionStatus === "authenticated",
    status: queryStatus,
    isLoading,
  };
}

export function useCreateUserMutation() {
  const client = useQueryClient();
  const { status, data: session } = useSession();

  return useMutation({
    mutationKey: ["create-user"],
    mutationFn: async (user: any) => {
      if (status === "authenticated" && session.user?.email) {
        const { data, status } = await axios.post<{
          status: number;
          error?: any;
        }>("/api/users", {
          ...user,
          email: session.user.email,
          birthday: user.birthday.toString(),
        });

        if (status >= 200 && status < 300) {
          client.setQueryData(["user", session.user.email], data);
        }

        return { data, status };
      }
    },
  });
}
