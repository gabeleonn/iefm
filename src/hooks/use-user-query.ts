import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export function useUserQuery() {
  const { status, data: session } = useSession();

  return useQuery({
    queryKey: ["user", session?.user?.email],
    queryFn: async () => {
      const { data, status } = await axios.get(
        `/api/users/${session?.user?.email}`,
      );
      return status === 200 ? data : null;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: status === "authenticated" && !!session?.user?.email,
  });
}

export function useCreateUserMutation() {
  const client = useQueryClient();
  const { status, data: session } = useSession();

  return useMutation({
    mutationKey: ["create-user"],
    mutationFn: async (user: any) => {
      if (status === "authenticated" && session.user?.email) {
        const { data, status } = await axios.post("/api/users", {
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
