export interface Role {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export type CreateRole = Omit<Role, "id" | "created_at" | "updated_at">;
export type UpdateRole = Partial<CreateRole>;
