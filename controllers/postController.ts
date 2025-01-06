import { Request, Response } from 'express';
import Post from '../models/post.model';
import User from '../models/user.model';

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await Post.findAll();
  res.json(posts);
};
