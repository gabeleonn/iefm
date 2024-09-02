import { validate as _validate } from "class-validator";
import { BadRequest } from "./errors";

export async function validate(instance: any) {
  const err = await _validate(instance);

  if (err.length) {
    throw new BadRequest(
      `Invalid properties: ${err.map((e) => e.property).join(", ")}`,
    );
  }
}
