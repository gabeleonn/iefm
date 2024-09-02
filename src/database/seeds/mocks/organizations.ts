import { Organization } from "@/database/models/organizations";

const sede: Organization = new Organization({
  id: "1e956d32-5ad8-452e-b310-9f9c78fab8b4",
  created_at: new Date(),
  updated_at: new Date(),
  status: "active",
  type: "headquarters",

  name: "Igreja Evangélica Família Missionária",
  shortname: "IEFM",
  cnpj: "18586951000150",

  email: "iefm@iefm.com.br",
  phone: "41991025297",
  website: "https://iefm.com.br",

  address: "Rua Nova Aurora",
  number: "2355",
  city: "Curitiba",
  state: "PR",
  cep: "81920150",

  settings: {
    sample: "ok",
  },
});

const fazenda: Organization = new Organization({
  id: "4089491d-8864-4cc5-ae05-fc5c5c5d64ce",
  created_at: new Date(),
  updated_at: new Date(),
  status: "active",
  type: "branch",

  name: "Igreja Evangélica Família Missionária Fazenda Rio Grande",
  shortname: "IEFM FRG",
  cnpj: "18586951000150",

  email: "fazenda@iefm.com.br",
  phone: "41991018190",
  website: "https://iefm.com.br",

  address: "Rua Iugoslávia",
  number: "105",
  city: "Fazenda Rio Grande",
  state: "PR",
  cep: "83823038",

  settings: {
    sample: "ok",
  },
});

export const organizations = [sede, fazenda];
