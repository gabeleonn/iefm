import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useOrganizationOptionsQuery() {
  return useQuery({
    queryKey: ["organizations-options"],
    queryFn: async () => {
      const { data } = await axios.get("/api/organizations/options");
      return data;
    },
    placeholderData: [],
    select: (data) => (Array.isArray(data) ? data : []),
    retry: false,
  });
}
