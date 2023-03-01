import React from "react";
import { SkillItem } from "./SkilLItem/SkillItem";

type Props = {};

export const Skill: React.FC<Props> = ({}) => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
          <h1 className="title-font mb-2 text-2xl font-medium text-white sm:text-3xl">
            My Skill
          </h1>
          <p className="w-full leading-relaxed text-opacity-80 lg:w-1/2">
            使用できる技術一覧です。業務で経験があるためBackendからFrontendまで幅広く対応することができます。また、デザインソフトもある程度使用することができます。
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          <SkillItem
            name="Ruby on rails"
            description="プログラミング言語で個人的に一番好きなRubyが使われており、好んで使っているフレームワークです。最近はNextjsのApiを作成するために使用しています。"
            imgPath="./rails-1.svg"
          />
          <SkillItem
            name="Laravel"
            description="業務でよく使っており、実際に求人マッチングサービスや業務系アプリの開発をしておりました。"
            imgPath="./laravel-2.svg"
          />
          <SkillItem
            name="ReactNative"
            description="業務でも使用したことがあり、スタンプラリーアプリなどの開発をしたことがあります。スマホアプリ開発をする際は好んで使用しています。"
            imgPath="./react-native-1.svg"
          />
          <SkillItem
            name="Next.js"
            description="フロントエンドで最も好んで使用しています。実はこのブログサイトもNext.jsとNotionApiを使って作られています。"
            imgPath="./next-js.svg"
          />
          <SkillItem
            name="Nuxt.js"
            description="業務で使用したことがあり、業務用アプリのフロントエンド開発で使用していました。"
            imgPath="./nuxt-2.svg"
          />
          <SkillItem
            name="Wordpress"
            description="Web制作会社にいた際によく使用していました。HTML,CSS,JavaScript,Wordpressを使い会社用のホームページを作っていました。"
            imgPath="./wordpress-blue.svg"
          />
          <SkillItem
            name="AffinityDesigner"
            description="ベクターの素材を作成したり、加工することができます。Illustratorのような機能が備えられています。"
            imgPath="./Logo_AffinityDesigner.png"
          />
          <SkillItem
            name="AffinityPhoto"
            description="画像を加工することができます。Photoshopのような機能が備えられています。"
            imgPath="./Logo_AffinityPhoto.png"
          />
          <SkillItem
            name="AffinityPublisher"
            description="ポスターやチラシなどデスクトップパブリッシング（DTP）向けのデザインソフトです。InDesignのような機能が備えられています。"
            imgPath="./Logo_AffinityPublisher.png"
          />
        </div>
      </div>
    </section>
  );
};
