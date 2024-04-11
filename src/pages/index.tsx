import Head from "next/head";
import styles from "@/components/home/index.module.sass";
import CardSkeleton from "@/components/common/card-skeleton";
import LoadMoreVirtualized from "@/components/common/virtuoso/components/load-more-virtualized";
import useLoadVendorsVirtualized from "@/components/common/virtuoso/hooks/use-load-vendors-virtualized";
export default function Home() {
  const { error, ...virtualizedProps } = useLoadVendorsVirtualized();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className={styles.main}>
      <Head>
        <title>
          سفارش آنلاین از رستوران‌ها، ‌شیرینی‌فروشی‌ها، کافی‌شاپ‌ها،
          سوپرمارکت‌ها،‌ نانوایی‌ها و ...
        </title>
      </Head>
      <section className={styles["cards-section"]}>
        {virtualizedProps.data.length === 0 ? (
          new Array(6).fill("").map((item, index) => <Footer key={index} />)
        ) : (
          <LoadMoreVirtualized {...virtualizedProps} />
        )}
      </section>
    </main>
  );
}

const Footer = () => {
  return (
    <div className={styles["card-container"]}>
      <CardSkeleton />
    </div>
  );
};
