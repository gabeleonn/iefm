import { adaptToNextRoute, Handler } from "@/app/lib/api";
import { getKnex } from "@/database";
import { Organization } from "@/database/models/organizations";

const getOrganizationOptions: Handler = async () => {
  const orgs = await getKnex()<Organization>("organizations").select(
    "id",
    "name",
    "shortname",
  );

  const mappedOptions = orgs.map((org) => ({
    value: org.id,
    label: org.name,
    shortname: org.shortname,
  }));

  return [mappedOptions, 200];
};

export const GET = adaptToNextRoute(getOrganizationOptions);
