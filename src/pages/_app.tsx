import { store } from "@/redux/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/components/common/styles/global.sass";
import { iransans } from "@/components/common/fonts";

export default function App({ Component, pageProps }: AppProps) {
  const globalVariables = (
    <style jsx global>{`
      :root {
        --fontfamily-font: ${iransans.style.fontFamily};
      }
    `}</style>
  );
  return (
    <>
      {globalVariables}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
