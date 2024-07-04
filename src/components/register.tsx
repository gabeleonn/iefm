import { Button } from "flowbite-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Chip } from "@/components/chip"
import { Datepicker } from "@/components/datepicker"
import { BrandIcon } from "@/components/icons/brand"
import { Input } from "@/components/input"
import { withAnimation } from "@/layouts/animation"

function Page() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<Record<string, string>>({
    fullname: "",
    cpf: "",
    birthdate: "01/01/2000",
    email: "",
    phone: "",
    church: "FRG",
    baptized: "true",
  })

  function handleFieldChange(field: { name: string; value: string }) {
    const { name, value } = field
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function onSubmit() {
    console.log(formData)
    navigate("/")
  }

  return (
    <form
      className="relative flex w-full flex-col gap-2 overflow-hidden p-8 lg:max-w-[30%]"
      autoComplete="off"
    >
      <BrandIcon
        width={1080}
        height={1080}
        className="absolute right-[-300px] top-0 z-[-1] text-zinc-900 opacity-20"
      />
      <h1 className="text-3xl font-bold">Crie sua conta</h1>
      <Input
        label="Nome"
        placeholder="João Silva"
        value={formData.fullname}
        name="fullname"
        onChange={handleFieldChange}
      />
      <Input
        label="CPF"
        placeholder="000.000.000-00"
        value={formData.cpf}
        name="cpf"
        onChange={handleFieldChange}
      />
      <Datepicker
        label="Data de nascimento"
        value={formData.birthdate}
        name="birthdate"
        onChange={handleFieldChange}
      />
      <Input
        label="E-mail"
        placeholder="joao@email.com"
        value={formData.email}
        name="email"
        onChange={handleFieldChange}
      />
      <Input
        label="Telefone"
        placeholder="(41) 99999-9999"
        value={formData.phone}
        name="phone"
        onChange={handleFieldChange}
      />
      <Chip
        label="Selecione sua Igreja"
        name="church"
        size="sm"
        onChange={handleFieldChange}
        selected={formData.church}
        options={[
          { label: "Familia Missionaria FRG", value: "FRG" },
          { label: "Familia Missionaria Sede", value: "SEDE" },
        ]}
      />
      <Chip
        label="Você e batizado?"
        name="baptized"
        size="sm"
        onChange={handleFieldChange}
        selected={formData.baptized}
        options={[
          { label: "Sim", value: "true" },
          { label: "Não", value: "false" },
        ]}
      />
      <Button
        className="mt-8 flex h-16 w-full items-center justify-center md:h-10"
        onClick={onSubmit}
      >
        Cadastrar
      </Button>
    </form>
  )
}

export const Register = withAnimation(Page)
