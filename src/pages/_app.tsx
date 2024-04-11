import { store } from "@/redux/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/components/common/styles/global.sass";
import localFont from "next/font/local";
const iransans = localFont({
  src: [
    {
      path: "../components/common/fonts/IRANSansWeb_Light.woff2",
      weight: "300",
    },
    {
      path: "../components/common/fonts/IRANSansWeb.woff2",
      weight: "400",
    },
    {
      path: "../components/common/fonts/IRANSansWeb_Medium.woff2",
      weight: "500",
    },
    {
      path: "../components/common/fonts/IRANSansWeb_Bold.woff2",
      weight: "700",
    },
  ],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --fontfamily-font: ${iransans.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
