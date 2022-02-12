import { Request, Response } from 'express';

export async function getHandler(request: Request, response: Response): Promise<Response> {
  return response.json({'message': 'Hello world'});
}
