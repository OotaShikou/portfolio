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

interface ExtendNextApiRequest extends NextApiRequest {
  query: {
    contains: string;
    page_size: string | undefined;
  };
}

export default async function handler(
  eq: ExtendNextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error(
      "envにNOTION_TOKENかNOTION_DATABASE_IDが設定されていません"
    );

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
    page_size: eq.query.page_size ? Number(eq.query.page_size) : undefined,
    filter: {
      and: [
        {
          property: "publish",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "title",
          title: {
            contains: eq.query.contains ?? "",
          },
        },
      ],
    },
  });

  res.status(200).json({ posts: query.results });
}
