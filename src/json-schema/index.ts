import zodValidate from "./zod";
import arkValidate from "./arktype";
import valibotValidate from "./valibot";

import type { JSONSchema7 } from "json-schema";
import type { StandardSchemaV1 } from "@standard-schema/spec";

export const toJsonSchema = <T, U>(schema: StandardSchemaV1<T, U>): JSONSchema7 => {
  const { vendor } = schema["~standard"];
  if (vendor === "zod") {
    return zodValidate(schema);
  } else if (vendor === "arktype") {
    return arkValidate(schema);
  } else if (vendor === "valibot") {
    return valibotValidate(schema);
  }
  throw new Error(`${vendor} is not supported.`);
};
