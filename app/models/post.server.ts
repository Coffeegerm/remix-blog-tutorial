import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";


export type { Post } from '@prisma/client';

export async function getPosts() {
  return prisma.post.findMany();
}

export const getPost = async (slug: string) => {
  return prisma.post.findUnique({
    where: { slug },
  });
}

export async function createPost(post: Pick<Post, "markdown" | "slug" | "title">) {
  return prisma.post.create({ data: post });
}
