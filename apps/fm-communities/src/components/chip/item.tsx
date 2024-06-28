import { Label, Radio, RadioProps } from "flowbite-react"

interface ChipItemProps extends Omit<RadioProps, "size"> {
  label: string
  size?: "sm" | "md" | "lg"
}

export function ChipItem({ label, id, checked, disabled, size = "md", ...props }: ChipItemProps) {
  function handleClassName() {
    let baseClassName =
      "cursor-pointer flex items-center py-2 px-4 border rounded-lg hover:bg-cyan-100 hover:border-cyan-500 hover:text-cyan-700 font-normal transition-all duration-300 disabled:opacity-50"

    baseClassName += checked
      ? ` bg-cyan-100 border-cyan-500 text-cyan-700`
      : ` border-gray-300 bg-gray-50 text-gray-700`

    switch (size) {
      case "sm":
        baseClassName += " h-10"
        break
      case "md":
        baseClassName += " h-12"
        break
      case "lg":
        baseClassName += " h-14"
        break
    }

    return baseClassName
  }

  return (
    <Label
      htmlFor={id}
      className={handleClassName()}
      key={id}
      disabled={disabled}
    >
      {label}
      <Radio
        id={id}
        checked={checked}
        {...props}
        className="hidden"
        disabled={disabled}
      />
    </Label>
  )
}
