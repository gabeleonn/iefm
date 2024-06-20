interface NavIconProps {
  icon: any;
}

export function NavIcon({ icon: Icon }: NavIconProps) {
  return (
    <div className="flex justify-center flex-col items-center p-4 rounded-xl w-14 h-14">
      <Icon stroke="var(--background2)" />
    </div>
  );
}
