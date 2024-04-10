import { getVendorsList } from "@/services/mobile";
import { GetVendersListApiRequest } from "@/services/mobile/index.types";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "@/components/home/index.module.sass";
import useApiCall from "@/components/hooks/use-api-call";
import Card from "@/components/card";
export default function Home() {
  const [param, setParam] = useState<GetVendersListApiRequest>({
    lat: 35.754,
    long: 51.328,
    page: 0,
    page_size: 10,
  });

  const { data, isLoading, error, fetchData } = useApiCall(getVendorsList);

  useEffect(() => {
    fetchData(param);
  }, [param]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      {data?.data.finalResult.map(
        (result, index) =>
          index !== 0 && <Card key={result.data.id} {...result.data} />
      )}
    </main>
  );
}
