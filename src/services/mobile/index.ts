import {
  GetVendersListApiRequest,
  GetVendersListApiResponse,
} from "@/services/mobile/index.types";
import { Api, Method } from "@/services/api";

export const getVendorsList = async (params: GetVendersListApiRequest) => {
  return (
    await Api<GetVendersListApiResponse>({
      method: Method.GET,
      url: "/mobile/v3/restaurant/vendors-list",
      params: params,
    })
  ).data;
};
