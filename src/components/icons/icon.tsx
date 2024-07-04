export function Icon({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}
