import { FastifyReply, FastifyRequest } from 'fastify';
import { createProduct, getProducts } from './product.service';
import { CreateProductInput } from './product.schema';

export async function createProductHandler(
  request: FastifyRequest<{
    Body: CreateProductInput;
  }>,
  reply: FastifyReply
) {
  const body = request.body;
  try {
    const product = await createProduct({
      ...body,
      ownerId: request.user.id,
    });
    return reply.code(201).send(product);
  } catch (error) {
    console.log(error);
    reply.code(500).send(error);
  }
}

export async function getProductsHandler() {
  const products = await getProducts();
  return products;
}
