import { GetServerSideProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Top/Hero/Hero";
import { Skill } from "../components/Top/Skill/Skill";
import { Blog } from "../components/Top/Blog/Blog";

export default function Home(props: any) {
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

      <div className="h-screen font-thin text-white">
        {/* HeroSection Component */}
        <Hero />

        {/* SkillSection Component */}
        <Skill />

        {/* BlogSection Component */}
        <Blog posts={props.posts} />
        {/* <p>{props.posts[0].properties.title.title[0].plain_text}</p> */}
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.API_URL}/notion_blogs?page_size=6`);
  const data = await res.json();

  return {
    props: data,
  };
};
