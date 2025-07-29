import zodValidate from "./zod";

import type { JSONSchema7 } from "json-schema";
import type { StandardSchemaV1 } from "@standard-schema/spec";

export const toJsonSchema = <T, U>(schema: StandardSchemaV1<T, U>): JSONSchema7 => {
  const { vendor } = schema["~standard"];
  if (vendor === "zod") {
    return zodValidate(schema);
  }
  throw new Error(`${vendor} is not supported.`);
};
