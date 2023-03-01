import React from "react";

type Props = {};

export const Hero: React.FC<Props> = ({}) => {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:p-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:max-w-7xl lg:text-6xl">
            Long headline to turn <br className="hidden lg:block" />
            your visitors into users
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-white">
            Free and Premium themes, UI Kits, templates and landing pages built
            with Tailwind CSS, HTML &amp; Next.js.
          </p>

          <a
            className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
            title="read more"
          >
            {" "}
            Read more about the offer »{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
