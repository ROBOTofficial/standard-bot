import { toJsonSchema } from "@valibot/to-json-schema";
import type { BaseIssue, BaseSchema } from "valibot";
import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { JSONSchema7 } from "json-schema";

export default function <T, U>(schema: StandardSchemaV1<T, U>): JSONSchema7 {
  return toJsonSchema(schema as BaseSchema<unknown, unknown, BaseIssue<unknown>>) as JSONSchema7;
}
