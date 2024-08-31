export interface OrganizationSettings {
  [key: string]: any;
}

export interface Organization {
  id: string;
  created_at: Date;
  updated_at: Date;
  status: "active" | "inactive";
  type: "headquarters" | "branch";

  name: string;
  short_name: string;
  cnpj: string;

  email: string;
  phone: string;
  website: string;

  address: string;
  number: string;
  city: string;
  state: string;
  cep: string;

  settings: OrganizationSettings;
}

const sede: Organization = {
  id: "1e956d32-5ad8-452e-b310-9f9c78fab8b4",
  created_at: new Date(),
  updated_at: new Date(),
  status: "active",
  type: "headquarters",

  name: "Igreja Evangélica Família Missionária",
  short_name: "IEFM",
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
};

const fazenda: Organization = {
  id: "4089491d-8864-4cc5-ae05-fc5c5c5d64ce",
  created_at: new Date(),
  updated_at: new Date(),
  status: "active",
  type: "branch",

  name: "Igreja Evangélica Família Missionária Fazenda Rio Grande",
  short_name: "IEFM FRG",
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
};

export const organizations = [sede, fazenda];
