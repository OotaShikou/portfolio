import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Common/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-screen bg-gray-900	">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
