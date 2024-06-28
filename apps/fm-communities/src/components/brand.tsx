import { BrandIcon } from "./icons/brand"

export function Brand() {
  return (
    <div className="mb-10 flex items-center justify-center gap-4">
      <BrandIcon
        height={50}
        width={50}
        className="text-red-600"
      />
      <span className="mt-4 text-xl font-bold">Familia Missionária</span>
    </div>
  )
}
