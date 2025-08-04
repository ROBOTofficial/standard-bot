import type { StandardSchemaV1 } from "@standard-schema/spec";

export const s = <T, U>(schema: StandardSchemaV1<T, U>) => ({
  validate: (value: unknown) => schema["~standard"].validate(value)
});

export * from "./json-schema/index";
