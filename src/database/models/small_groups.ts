import { Model } from "@/database/models/shared";

class SmallGroupModel extends Model {
  id!: string;

  name!: string;
  settings!: Record<string, any>;

  organization_id!: string;
}

export class SmallGroup extends SmallGroupModel {
  constructor(data: Partial<SmallGroup>) {
    super(data, SmallGroup);
  }
}

class SmallGroupMemberModel extends Model {
  id!: bigint;

  role!: string;

  small_group_id!: string;
  user_id!: string;
}

export class SmallGroupMember extends SmallGroupMemberModel {
  constructor(data: Partial<SmallGroupMember>) {
    super(data, SmallGroupMember);
  }
}
