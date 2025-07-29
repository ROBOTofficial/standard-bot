import zodToJsonSchema from "zod-to-json-schema";
import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { JSONSchema7 } from "json-schema";
import type { ZodType } from "zod";

export default function <T, U>(schema: StandardSchemaV1<T, U>): JSONSchema7 {
  return zodToJsonSchema(schema as ZodType) as JSONSchema7;
}
