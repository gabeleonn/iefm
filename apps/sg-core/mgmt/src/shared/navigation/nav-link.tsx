import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  icon: any;
  text?: string;
  href: string;
}

export function NavLink({ icon: Icon, text, href }: NavLinkProps) {
  const pathname = usePathname();

  const linkClassName =
    "m-auto w-14 h-14 flex justify-center flex-col items-center rounded-xl p-2";
  const color = pathname === href ? "text-primary" : "text-background2";

  return (
    <Link className={[linkClassName, color].join(" ")} href={href}>
      <Icon
        stroke={pathname === href ? "var(--primary)" : `var(--background2)`}
      />
      {text ? <span className={`${color} text-xs`}>{text}</span> : null}
    </Link>
  );
}
