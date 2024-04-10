import { useState, useEffect } from "react";

function useApiCall<T>(queryFn: (...args: any[]) => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async (...args: any) => {
    setIsLoading(true);
    try {
      const responseData = await queryFn(...args);
      setData(responseData);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
}

export default useApiCall;
