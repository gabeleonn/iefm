import { Link, useResolvedPath, useMatch, matchPath } from "react-router-dom";

interface NavLinkProps {
  icon: any;
  text?: string;
  href: string;
}

export function NavLink({ icon: Icon, text, href }: NavLinkProps) {
  const { pathname } = useResolvedPath(href);
  const match = useMatch({ path: pathname, end: pathname === "/" });

  const linkClassName =
    "m-auto w-14 h-14 flex justify-center flex-col items-center rounded-xl p-2";
  const color = match ? "text-primary" : "text-background2";

  return (
    <Link className={[linkClassName, color].join(" ")} to={href}>
      <Icon stroke={match ? "var(--primary)" : `var(--background2)`} />
      {text ? <span className={`${color} text-xs`}>{text}</span> : null}
    </Link>
  );
}
