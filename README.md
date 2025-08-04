# `Standard-bot`

Validate lib for standard schema.

## Usage

### Validater

```ts
import { s } from "standard-bot";
import { z } from "zod";

const schema = z.object({
  foo: z.string(),
  bar: z.number()
});

const value = {
  foo: "Hello World!!",
  bar: 1234567890
};

s(schema).validate(value);
```

### toJsonSchema

```ts
import { toJsonSchema } from "standard-bot";
import { z } from "zod";

const schema = z.object({
  foo: z.string(),
  bar: z.number()
});

toJsonSchema(schema);
```
