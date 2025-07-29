import zodToJsonSchema from "zod-to-json-schema";
import type { JSONSchema7 } from "json-schema";
import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { ZodType } from "zod";

export const toJsonSchema = <T, U>(schema: StandardSchemaV1<T, U>): JSONSchema7 => {
  const { vendor } = schema["~standard"];
  if (vendor === "zod") {
    return zodToJsonSchema(schema as ZodType) as JSONSchema7;
  }
  throw new Error(`${vendor} is not supported.`);
};
