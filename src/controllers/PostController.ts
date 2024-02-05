import { Request, Response } from "express";
import { prisma } from "../database";

export default {
  async createPost(request: Request, response: Response) {
    try {
      const { title, content, userId } = request.body;
      const post = await prisma.post.create({
        data: {
          title,
          content,
          userId
        }
      })

      return response.json({
        error: false,
        message: 'Publicação feita com sucesso!',
        post
      });
    } catch(error) {
      return response.json({message: error.message});
    }
  },
  async listPost(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const post = await prisma.post.findUnique({ where: { id: Number(id)} });

      if(!post) {
        return response.json({
          error: true,
          message: 'Publicação não encontrada!'
        })
      }

      return response.json({
        error: false,
        post
      });
    } catch(error) {
      return response.json({message: error.message});
    }
  }
}