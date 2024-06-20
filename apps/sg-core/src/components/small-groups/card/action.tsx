import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export function Action({ children, to }: { children: ReactNode; to: string }) {
  const navigate = useNavigate();

  function onClick() {
    navigate(to);
  }

  return (
    <button
      onClick={onClick}
      className="text-sm text-white bg-primary rounded-lg p-2 w-full h-16"
    >
      {children}
    </button>
  );
}
