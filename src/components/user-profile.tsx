import { useUserQuery } from "@/hooks/use-user-query";
import { User } from "@nextui-org/react";
import { UserIcon } from "./icons/user";
import { useRouter } from "next/navigation";

export default function UserProfile({ className }: { className: string }) {
  const { user } = useUserQuery();
  const router = useRouter();

  return (
    <User
      className={`${className} hover:cursor-pointer justify-start p-2 hover:bg-gray-200`}
      name={user?.fullname}
      description={user?.email}
      avatarProps={{
        showFallback: true,
        className: "bg-gray-200",
        fallback: <UserIcon />,
      }}
      onClick={() => router.push("/ajustes")}
    />
  );
}
