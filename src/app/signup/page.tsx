"use client";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { isObjectEmpty } from "@/helpers";
import { useCreateUserMutation, useUserQuery } from "@/hooks/use-user-query";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DatePicker,
  Input,
  RadioGroup,
  Spinner,
} from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import { Radio } from "@/components/radio";

export default function SignIn() {
  const [form, setForm] = useState({
    fullname: "",
    cpf: "",
    birthday: new CalendarDate(2002, 2, 1),
    gender: "male",
    phone: "",
    baptized: "yes",
    church_code: "FRG",
  });
  const { data, status, isLoading } = useUserQuery();
  const { mutate: createUser, isPending } = useCreateUserMutation();
  const router = useRouter();

  const hasUser = useMemo(
    () => !isObjectEmpty(data) && status === "success",
    [data, status],
  );

  useEffect(() => {
    if (hasUser) {
      router.push("/");
    }
  }, [hasUser, router]);

  const handleFormChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = () => {
    createUser(form);
  };

  if (isLoading && isPending && !hasUser) {
    return (
      <div className="w-full min-h-screen h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-screen bg-[url('./assets/bg.jpg')] bg-center bg-cover flex flex-col items-center justify-center p-4">
      <Card className="lg:max-w-[40vw] lg:min-w-[40vw] w-full">
        <CardHeader>
          <h2 className="font-bold text-2xl text-center">
            Finalize seu cadastro
          </h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              label="Nome"
              placeholder="João Silva"
              value={form.fullname}
              onChange={(e) => handleFormChange("fullname", e.target.value)}
            />

            <Input
              type="text"
              label="CPF"
              placeholder="000.000.000-00"
              value={form.cpf}
              onChange={(e) => handleFormChange("cpf", e.target.value)}
            />

            <DatePicker
              label="Data de Nascimento"
              showMonthAndYearPickers
              value={form.birthday}
              onChange={(date) => handleFormChange("birthday", date)}
            />

            <RadioGroup
              label="Sexo"
              orientation="horizontal"
              size="sm"
              defaultValue={form.gender}
              onChange={(e) => handleFormChange("gender", e.target.value)}
            >
              <Radio value="male">Masculino</Radio>
              <Radio value="female">Feminino</Radio>
            </RadioGroup>

            <Input
              type="tel"
              label="Telefone"
              placeholder="41987654321"
              pattern="[0-9]{11}"
              value={form.phone}
              onChange={(e) => handleFormChange("phone", e.target.value)}
            />

            <RadioGroup
              label="É batizado?"
              orientation="horizontal"
              size="sm"
              defaultValue={form.baptized}
              onChange={(e) => handleFormChange("baptized", e.target.value)}
            >
              <Radio value="yes">Sim</Radio>
              <Radio value="no">Não</Radio>
            </RadioGroup>

            <RadioGroup
              label="Sexo"
              orientation="horizontal"
              size="sm"
              defaultValue={form.church_code}
              onChange={(e) => handleFormChange("church_code", e.target.value)}
            >
              <Radio value="SEDE">IEFM Sede</Radio>
              <Radio value="FRG">IEFM Fazenda Rio Grande</Radio>
            </RadioGroup>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            color="primary"
            onClick={handleFormSubmit}
          >
            Finalizar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
