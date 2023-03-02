import { GetServerSideProps } from "next";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Paragraph } from "../../components/Block/Paragraph/Paragraph";
import { Todo } from "../../components/Block/Todo/Todo";
import { Heading_1 } from "../../components/Block/Heading_1/Heading_1";
import { Heading_2 } from "../../components/Block/Heading_2/Heading_2";
import { Heading_3 } from "../../components/Block/Heading_3/Heading_3";
import { ListItem } from "../../components/Block/List_item/ListItem";
import { Blockquote } from "../../components/Block/Blockquote/Blockquote";

export default function BlogIndex(props: any) {
  return (
    <>
      <Head>
        <title> | 太田志幸の技術ブログ</title>
        <meta
          name="description"
          content="Nextjs,Ruby on Rails,Laravel,Nuxtjsなどの技術ブログを書いています。また太田志幸のポートフォリオもまとめられています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto bg-gray-900 px-4 pt-28 font-thin text-white">
        {props.post.results.map((block: any, index: number) => (
          <span key={block.id}>
            {block.type == "paragraph" &&
              block.paragraph.rich_text.map((item: any) => (
                <Paragraph key={block.id} text={item.plain_text} />
              ))}

            {block.type == "to_do" &&
              block.to_do.rich_text.map((item: any) => (
                <Todo
                  key={block.id}
                  inputId={block.id}
                  text={item.plain_text}
                  checked={block.to_do.checked}
                />
              ))}

            {block.type == "heading_1" &&
              block.heading_1.rich_text.map((item: any) => (
                <Heading_1 key={block.id} text={item.plain_text} />
              ))}

            {block.type == "heading_2" &&
              block.heading_2.rich_text.map((item: any) => (
                <Heading_2 key={block.id} text={item.plain_text} />
              ))}

            {block.type == "heading_3" &&
              block.heading_3.rich_text.map((item: any) => (
                <Heading_3 key={block.id} text={item.plain_text} />
              ))}

            {block.type == "bulleted_list_item" &&
              block.bulleted_list_item.rich_text.map((item: any) => (
                <ListItem
                  key={block.id}
                  text={item.plain_text}
                  type="bulleted_list_item"
                />
              ))}
            {block.type == "numbered_list_item" &&
              block.numbered_list_item.rich_text.map((item: any) => (
                <ListItem
                  key={block.id}
                  text={item.plain_text}
                  type="numbered_list_item"
                />
              ))}

            {block.type == "quote" &&
              block.quote.rich_text.map((item: any) => (
                <Blockquote key={block.id} text={item.plain_text} />
              ))}

            {block.type == "divider" && <hr className="my-3" />}

            {block.type == "image" && (
              <img
                className="max-w-320 w-screen md:max-w-md lg:max-w-lg"
                src={block.image.file.url}
                alt={block.image.caption[0]?.plain_text ?? ""}
              />
            )}

            {block.type == "code" && (
              <SyntaxHighlighter
                className="mt-6"
                language={block.code.language}
                style={monokaiSublime}
              >
                {block.code.rich_text[0]?.plain_text}
              </SyntaxHighlighter>
            )}
            <small className="mb-6 font-bold text-gray-500">
              {block.code?.caption[0]?.plain_text}
            </small>
          </span>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.API_URL}/notion_blog_content?postId=${context.params?.id}`
  );
  const data = await res.json();

  return {
    props: data,
  };
};
