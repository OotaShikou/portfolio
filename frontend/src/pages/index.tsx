import { GetServerSideProps } from "next";
import Head from "next/head";
import { Button } from "../components/Button/Button";

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold  text-red-700">ヘッダー</h1>
        <Button
          outlined={false}
          size={"small"}
          onClick={() => (document.location.href = "https://reactjs.org")}
        >
          Submit
        </Button>
        <code>{props.posts[0].properties.title.title[0].plain_text}</code>
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.API_URL}/notion_blogs`);
  const data = await res.json();

  return {
    props: data,
  };
};
