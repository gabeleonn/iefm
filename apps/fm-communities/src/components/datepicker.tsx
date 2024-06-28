import { Datepicker as FlowBiteDatepicker, Label, DatepickerProps } from "flowbite-react"

interface InputProps extends Omit<DatepickerProps, "onChange" | "name" | "value"> {
  label: string
  name: string
  onChange: (field: { name: string; value: string }) => void
  value?: string
}

export function Datepicker({ id, label, name, value = "", onChange, ...props }: InputProps) {
  return (
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor={id}
          value={label}
        />
      </div>
      <FlowBiteDatepicker
        id={id}
        sizing="sm"
        {...props}
        name={name}
        language="pt-BR"
        labelTodayButton="Hoje"
        labelClearButton="Limpar"
        defaultDate={new Date(value)}
        onSelectedDateChanged={(date) => onChange({ name, value: date.toLocaleDateString("pt-BR") })}
      />
    </div>
  )
}
