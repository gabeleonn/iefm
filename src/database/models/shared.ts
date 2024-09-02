import { BadRequest } from "@/app/lib/errors";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { IsDateString, validate } from "class-validator";

export class Timestamps {
  @IsDateString()
  created_at!: Date;
  @IsDateString()
  updated_at!: Date;
}

export class Model extends Timestamps {
  constructor(data: any, model: any) {
    super();
    const instance = plainToInstance(model, data);
    Object.assign(this, instance);
  }

  toJSON() {
    return instanceToPlain(this);
  }

  async validate() {
    const err = await validate(this);

    if (err.length) {
      throw new BadRequest(
        `Invalid properties: ${err.map((e) => e.property).join(", ")}`,
      );
    }
  }
}
