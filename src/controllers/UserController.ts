import { Request, Response } from "express";
import { prisma } from "../database";

export default {
  async createUser(request: Request, response: Response) {
    try {
      const { name, email } = request.body;
      const userExist = await prisma.user.findUnique({ where: { email } });
      const createdAt = new Date();
      const updatedAt = new Date();

      if (userExist) {
        return response.json({
          error: true,
          message: 'Já existe um usuário com este e-mail.'
        });
        const user = await prisma.user.create({
          data: {
            name,
            email,
            createdAt,
            updatedAt
          }
        });
        return response.json({
          error: false,
          message: 'Usuário cadastrado. Bem vindo ao sistema!',
          user
        })
      }
    } catch(error) {
      return response.json({message: error.message});
    }
  }
}