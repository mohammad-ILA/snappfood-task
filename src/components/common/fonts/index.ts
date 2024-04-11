import localFont from "next/font/local";
export const iransans = localFont({
  src: [
    {
      path: "./IRANSansWeb_Light.woff2",
      weight: "300",
    },
    {
      path: "./IRANSansWeb.woff2",
      weight: "400",
    },
    {
      path: "./IRANSansWeb_Medium.woff2",
      weight: "500",
    },
    {
      path: "./IRANSansWeb_Bold.woff2",
      weight: "700",
    },
  ],
});
