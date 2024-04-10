import { store } from "@/redux/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import '@/components/styles/global.sass'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
