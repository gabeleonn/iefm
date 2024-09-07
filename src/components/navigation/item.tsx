import { Button, Link, ButtonProps } from "@nextui-org/react";

export function NavigationItem({ children, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className="bg-gray-100 hover:bg-gray-200 justify-start hover:text-red-500"
      as={Link}
    >
      {children}
    </Button>
  );
}
