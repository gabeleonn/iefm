import { ChipItem } from "./item";

interface ChipProps {
  label: string;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  selected?: string;
  onChange: (field: { name: string; value: string }) => void;
  size?: "sm" | "md" | "lg";
}

export function Chip({
  label,
  options,
  name,
  selected,
  onChange,
  size,
}: ChipProps) {
  return (
    <fieldset className="flex max-w-md flex-row flex-wrap gap-2">
      <legend className="mb-2 text-sm font-medium text-brand-labels dark:text-white">
        {label}
      </legend>
      {options.map((option) => (
        <ChipItem
          key={option.value}
          label={option.label}
          id={option.value}
          checked={option.value === selected}
          name={name}
          onChange={() => onChange({ name, value: option.value })}
          size={size}
        />
      ))}
    </fieldset>
  );
}
