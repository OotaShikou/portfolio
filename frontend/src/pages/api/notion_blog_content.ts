import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_TOKEN;
const notion = new Client({
  auth: notionSecret,
});

type Data = {
  post: any;
};

interface ExtendNextApiRequest extends NextApiRequest {
  query: {
    postId: string;
  };
}

export default async function handler(
  eq: ExtendNextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!notionSecret) throw new Error("envにNOTION_TOKENが設定されていません");
  if (!eq.query.postId)
    throw new Error("リクエストにpostIdが設定されていません");

  const postId = eq.query.postId;

  const query = await notion.blocks.children.list({
    block_id: postId,
  });

  res.status(200).json({ post: query });
}
