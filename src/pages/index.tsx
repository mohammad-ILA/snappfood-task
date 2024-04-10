import { getVendorsList } from "@/services/mobile";
import { GetVendersListApiRequest } from "@/services/mobile/index.types";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "@/components/home/index.module.sass";
import useApiCall from "@/components/common/hooks/use-api-call";
import Card from "@/components/common/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addVendors } from "@/redux/vendors-slice";
export default function Home() {
  const dispatch = useAppDispatch();
  const vendors = useAppSelector((state) => state.vendors.vendors);
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

  useEffect(() => {
    if (data)
      dispatch(
        addVendors(
          data.data.finalResult
            .filter((v, index) => index !== 0)
            .map((vendor) => vendor.data)
        )
      );
  }, [data]);

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
      <section className={styles["cards-section"]}>
        {vendors.map(
          (vendor, index) => index !== 0 && <Card key={vendor.id} {...vendor} />
        )}
      </section>
    </main>
  );
}
