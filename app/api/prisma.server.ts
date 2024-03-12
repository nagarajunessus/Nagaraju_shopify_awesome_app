import { PrismaClient } from "@prisma/client";
const prisma: PrismaClient = global.prisma || new PrismaClient();
export const createCustomer = async({ email , name}: any) => {
    return await prisma.customer.create({
        data: {
            id: '12345',
            email: email,
            name: name
        } as any
    })
}

export const createProduct = async ({ title, price, description }: any) => {
    try {
      const CreateProduct = await prisma.product.create({
        data: {
          title: title,
          price: price,
          description: description,
        }
      });
      return CreateProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Failed to create product in the database");
    } 
    finally {
      await prisma.$disconnect();
    }
    
  };  