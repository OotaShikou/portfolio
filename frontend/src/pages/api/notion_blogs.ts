import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

type Data = {
  posts: any;
};

export default async function handler(
  eq: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error(
      "envにNOTION_TOKENかNOTION_DATABASE_IDが設定されていません"
    );

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
    filter: {
      or: [
        {
          property: "publish",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  res.status(200).json({ posts: query.results });
}
