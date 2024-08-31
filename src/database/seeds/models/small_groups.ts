import { User } from "./users";

export interface SmallGroupSettings {
  [key: string]: any;
}

export interface SmallGroup {
  id: string;
  created_at: Date;
  updated_at: Date;

  name: string;
  settings: SmallGroupSettings;

  organization_id: string;
}

export interface SmallGroupMember {
  id: bigint;
  created_at: Date;
  updated_at: Date;

  role: string;

  small_group_id: string;
  user_id: string;
}
