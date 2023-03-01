import React from "react";

type Props = {
  posts: {
    created_time: string;
    id: string;
    cover?: {
      external: {
        url: string;
      };
    };
    properties: {
      tag: {
        multi_select: {
          id: string;
          name: string;
          color: string;
        }[];
      };
      title: {
        title: {
          plain_text: string;
        }[];
      };
    };
  }[];
  title_unset?: boolean;
};

export const Blog: React.FC<Props> = ({ posts, title_unset }) => {
  return (
    <section className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        {!title_unset ? (
          <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
            <h1 className=" mb-2 text-2xl font-medium text-white sm:text-3xl">
              技術Blog
            </h1>
            <p className="w-full leading-relaxed text-opacity-80 lg:w-1/2">
              日頃勉強しているものをBlogにしました。幅広く様々な技術について学習し、技術力を向上させていきたいなと考えています。興味があれば閲覧していただければ幸いです。
            </p>
          </div>
        ) : null}
        <div className="-m-4 flex flex-wrap">
          {posts.map((item) => (
            <div className="p-4 md:w-1/3" key={item.id}>
              <div className="h-full overflow-hidden rounded-lg border-2 border-gray-800">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src={
                    item.cover?.external.url ?? "https://dummyimage.com/404x404"
                  }
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500">
                    CATEGORY
                  </h2>
                  <div className="mb-3 flex flex-wrap">
                    {item.properties.tag.multi_select.map((tag) => (
                      <span
                        className="pr-2 text-xs uppercase text-gray-500"
                        key={tag.id}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <p className="mb-3 leading-relaxed">
                    {item.properties.title.title[0].plain_text}
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      className="inline-flex items-center text-indigo-400 md:mb-2 lg:mb-0"
                      href={`./blog/${item.id}`}
                    >
                      記事を読む
                      <svg
                        className="ml-2 mt-1 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <time className="ml-auto mt-1 inline-flex items-center text-sm leading-none text-gray-500 md:ml-0 lg:ml-auto">
                      {item.created_time.slice(0, 10)}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
