import { GetServerSideProps } from "next";
import Head from "next/head";
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

      <div className="bg-gray-900 container mx-auto px-4 pt-28 font-thin text-white">
        {props.post.results.map((block:any, index: number) => (
          <span key={block.id}>
            {block.type == "paragraph" && <Paragraph text={block.paragraph.rich_text[0]?.plain_text} />}

            {block.type == "to_do" && <Todo inputId={block.id} text={block.to_do.rich_text[0]?.plain_text} checked={block.to_do.checked} />}

            {block.type == "heading_1" && <Heading_1 text={block.heading_1.rich_text[0]?.plain_text} />}

            {block.type == "heading_2" && <Heading_2 text={block.heading_2.rich_text[0]?.plain_text} />}

            {block.type == "heading_3" && <Heading_3 text={block.heading_3.rich_text[0]?.plain_text} />}

            {block.type == "bulleted_list_item" && <ListItem text={block.bulleted_list_item.rich_text[0]?.plain_text} type="bulleted_list_item" />}
            {block.type == "numbered_list_item" && <ListItem text={block.numbered_list_item.rich_text[0]?.plain_text} type="numbered_list_item" />}
            
            {block.type == "quote" && <Blockquote text={block.quote.rich_text[0]?.plain_text} />}

            {block.type == "divider" && <hr className="my-3"/>}

            {block.type == "image" && <img className="w-screen max-w-320 md:max-w-md lg:max-w-lg" src={block.image.file.url} alt={block.image.caption[0]?.plain_text ?? ""} />}

            {block.type == "code" && <p>code</p>}

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
