import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useApiCall from "../../hooks/use-api-call";
import { useCallback, useEffect, useState } from "react";
import {
  FinalResultDataType,
  GetVendersListApiRequest,
} from "@/services/mobile/index.types";
import { addVendors } from "@/redux/vendors-slice";
import { getVendorsList } from "@/services/mobile";
import Card from "../../card";
import CardSkeleton from "../../card-skeleton";

const useLoadVendorsVirtualized = () => {
  const dispatch = useAppDispatch();
  const vendors = useAppSelector((state) => state.vendors.vendors);
  const { data, isLoading, error, fetchData } = useApiCall(getVendorsList);
  const [param, setParam] = useState<GetVendersListApiRequest>({
    lat: 35.754,
    long: 51.328,
    page: 0,
    page_size: 10,
  });

  useEffect(() => {
    fetchData(param);
  }, [param]);

  useEffect(() => {
    if (data) {
      const vendorsData = data.data.finalResult
        .filter((v, index) => v.type === "VENDOR")
        .map((vendor) => vendor.data);
      dispatch(addVendors(vendorsData));
    }
  }, [data]);

  const loadMore = useCallback(() => {
    setParam((prevValue) => ({ ...prevValue, page: prevValue.page + 1 }));
  }, []);
  const itemContent = (index: number, vendor: FinalResultDataType) => {
    return (
      <div style={{ padding: "16px" }}>
        <Card {...vendor} />
      </div>
    );
  };

  return {
    data: vendors,
    endReached: loadMore,
    increaseViewportBy: 500,
    itemContent,
    loadMoreComponent,
    error,
  };
};

export default useLoadVendorsVirtualized;

const loadMoreComponent = () => {
  return (
    <div style={{ padding: "16px" }}>
      <CardSkeleton />
    </div>
  );
};
