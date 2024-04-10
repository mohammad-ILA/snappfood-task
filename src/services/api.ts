import axios, { AxiosError } from "axios";

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error: AxiosError & { config: { _refreshTokenRequest: boolean } }) => {
    return Promise.reject(error);
  }
);

export async function Api<T>({
  method,
  url,
  params,
  body,
}: {
  method: Method;
  url: string;
  params?: object;
  body?: object;
}) {
  return await axiosInstance.request<T>({
    method,
    url: url,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    params,
    data: body,
  });
}
