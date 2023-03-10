import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type Props = {};

export const Hero: React.FC<Props> = ({}) => {
  //   let canvas: HTMLCanvasElement;
  //   let model: THREE.Group;

  //   useEffect(() => {
  //     canvas = document.getElementById("canvas") as HTMLCanvasElement
  //     const sizes = {
  //       width: innerWidth,
  //       height: innerHeight,
  //     }
  //     const scene: THREE.Scene = new THREE.Scene();

  //     const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  //       75,
  //       sizes.width / sizes.height,
  //       0.1,
  //       1000
  //     )
  //     camera.position.set(0,0,2)

  //     const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  //       canvas: canvas,
  //       antialias: true,
  //     })
  //     renderer.setSize(sizes.width, sizes.height)
  //     renderer.setPixelRatio(window.devicePixelRatio)

  //     const gltfLoader = new GLTFLoader();
  //     gltfLoader.load("./models/scene.gltf", (gltf) => {
  //       model = gltf.scene;
  //       scene.add(model);
  //     })

  //     const tick = () => {
  //       renderer.render(scene, camera)
  //       requestAnimationFrame(tick);
  //     };
  //     tick();
  //   }, [])
  return (
    <section className="bg-gray-900">
      {/* <canvas id="canvas"></canvas> */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:p-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:max-w-7xl lg:text-6xl">
            Hi! My name is Ota Shikou <br className="lg:block" />
            My job is a programmer.
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-white">
            普段はRuby on Rails や
            LaravelでのAPI開発や、Next.jsやNuxt.jsを使ってfrontendの開発をしています。
            また、ReactNativeを扱ってスマホアプリの開発などもした経験があります。
          </p>

          <a
            className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
            title="read more"
          >
            {" "}
            Please look my portfolio »{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
