import { TextInput, Label, TextInputProps } from "flowbite-react";

interface InputProps extends Omit<TextInputProps, "onChange" | "name"> {
  label: string;
  name: string;
  onChange: (field: { name: string; value: string }) => void;
}

export function Input({ id, label, name, onChange, ...props }: InputProps) {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        id={id}
        type="text"
        sizing="sm"
        {...props}
        name={name}
        onChange={(e) => onChange({ name, value: e.target.value })}
        autoComplete="off"
      />
    </div>
  );
}
