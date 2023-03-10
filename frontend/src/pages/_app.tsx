import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Common/Footer/Footer";
import { Header } from "@/components/Common/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-screen bg-gray-900	">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
