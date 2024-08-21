import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("role_permissions").del();
  await knex("permissions").del();
  await knex("roles").del();
  await knex("users")
    .where({
      email: "fazenda@iefm.com.br",
    })
    .orWhere({
      email: "sede@iefm.com.br",
    })
    .del();

  // Inserts seed entries
  await knex("roles").insert([
    { name: "Admin", description: "Administrador" },
    {
      name: "Coordenador",
      description: "Coordenador de redes de grupos pequenos",
    },
    {
      name: "Supervisor",
      description: "Supervisor de grupos pequenos",
    },
    { name: "Líder", description: "Líder de um grupo pequeno" },
    {
      name: "Membro",
      description: "Membro de um grupo pequeno",
    },
    {
      name: "Visitante",
      description: "Visitante de um grupo pequeno",
    },
  ]);

  await knex("permissions").insert([
    { resource: "organization.users", action: "READ" },
    { resource: "organization.users", action: "UPDATE" },
    { resource: "organization.users", action: "DELETE" },
    { resource: "organization.users", action: "CREATE" },

    { resource: "organization.roles", action: "READ" },
    { resource: "organization.roles", action: "UPDATE" },
    { resource: "organization.roles", action: "DELETE" },
    { resource: "organization.roles", action: "CREATE" },

    { resource: "organization.permissions", action: "READ" },
    { resource: "organization.permissions", action: "UPDATE" },
    { resource: "organization.permissions", action: "DELETE" },
    { resource: "organization.permissions", action: "CREATE" },
  ]);

  const [adminRole] = await knex("roles").where({ name: "Admin" }).select("id");
  const permissions = await knex("permissions").select("id");

  const rolePermissions = permissions.map((permission) => ({
    role_id: adminRole.id,
    permission_id: permission.id,
  }));

  await knex("role_permissions").insert(rolePermissions);

  await knex("users").insert([
    {
      email: "fazenda@iefm.com.br",
      fullname: "Fazenda",
      phone: "00000000000",
      cpf: "00000000000",
      birthday: "1990-01-01",
      gender: "male",
      baptized: "yes",
      church_code: "FRG",
      role_id: adminRole.id,
    },
    {
      email: "sede@iefm.com.br",
      fullname: "Sede",
      phone: "00000000000",
      cpf: "00000000000",
      birthday: "1990-01-01",
      gender: "male",
      baptized: "yes",
      church_code: "SEDE",
      role_id: adminRole.id,
    },
  ]);
}
