import { getPostsTitle } from "@/libs/posts";
import type { NextApiRequest, NextApiResponse } from "next";

interface IGetPostsTitleHandlerResponse {
  titles: string[];
}

export default function getPostsTitleHandler(
  req: NextApiRequest,
  res: NextApiResponse<IGetPostsTitleHandlerResponse>
) {
  const titles = getPostsTitle();

  return res.status(200).json({ titles });
}
