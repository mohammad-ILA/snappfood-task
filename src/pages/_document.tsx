import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <meta
          name="description"
          content="اسنپ فود (زودفود قدیم) سامانه سفارش آنلاین غذا، شیرینی و خرید آنلاین از کافی شاپ و سوپرمارکت ها در تهران، کرج، شیراز، اصفهان، مشهد و سراسر ایران"
          data-react-helmet="true"
        />
        <link rel="stylesheet" href="/fonts/font.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
