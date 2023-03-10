import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Blog } from "../../components/Top/Blog/Blog";

export default function BlogIndex(props: any) {
  const router = useRouter();
  const [input, setInput] = useState();

  // ボタンをクリックしたときの処理
  const clickButton = () => {
    router.push({
      pathname: "/blog",
      query: { title: input },
    });
  };

  return (
    <>
      <Head>
        <title>太田志幸の技術ブログ</title>
        <meta
          name="description"
          content="Nextjs,Ruby on Rails,Laravel,Nuxtjsなどの技術ブログを書いています。また太田志幸のポートフォリオもまとめられています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto pt-32 font-thin text-white">
        <div className="flex items-center justify-center">
          <div className="flex w-96 max-w-full	space-x-1 px-5">
            <input
              type="text"
              className="mr-4 block w-full rounded border border-indigo-600 bg-gray-800 px-4 py-2 text-indigo-400 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
              placeholder="記事を検索..."
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
            />
            <button
              className="rounded bg-indigo-600 px-4 text-white"
              onClick={clickButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Blog posts={props.posts} title_unset={true} />
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.API_URL}/notion_blogs?contains_title=${
      context.query?.title ?? ""
    }`
  );
  const data = await res.json();

  return {
    props: data,
  };
};
