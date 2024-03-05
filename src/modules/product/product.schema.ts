import z from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

//User input properties for product
const productInput = {
  title: z.string(),
  price: z.number(),
  content: z.string().optional(),
};

//Generated properties for product
const productGenerated = {
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
};

//Schema for creating a product
const createProductSchema = z.object({
  ...productInput,
});

//Response for a single product
const productResponseSchema = z.object({
  ...productInput,
  ...productGenerated,
});

//Response for an array of products
const productsResponseSchema = z.array(productResponseSchema);

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const { schemas: productSchemas, $ref } = buildJsonSchemas(
  {
    createProductSchema,
    productResponseSchema,
    productsResponseSchema,
  },
  { $id: 'ProductSchema' }
);
