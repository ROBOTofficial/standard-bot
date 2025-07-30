import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { JSONSchema7 } from "json-schema";
import type { Type } from "arktype";

export default function <T, U>(schema: StandardSchemaV1<T, U>): JSONSchema7 {
  return (schema as Type).toJsonSchema() as JSONSchema7;
}
