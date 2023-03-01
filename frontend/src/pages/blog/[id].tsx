import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

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

      <div className="bg-gray-900 font-thin text-white">
        <p>このページのデータタイプは{props.post.object}です</p>
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
