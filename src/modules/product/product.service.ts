import prisma from '../../utils/prisma';
import { CreateProductInput } from './product.schema';

export async function createProduct(
  data: CreateProductInput & { ownerId: number }
) {
  const product = await prisma.product.create({
    data,
  });
  return product;
}

export function getProducts() {
  return prisma.product.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      price: true,
      createdAt: true,
      updatedAt: true,
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
}
