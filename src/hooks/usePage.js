import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DB_URL =
  "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app";

export function usePage(userId, page) {
  const { data, status, error } = useQuery({
    queryKey: [page],
    queryFn: async () => {
      const url = `${DB_URL}/users/${userId}/${page}.json`;
      return axios.get(url);
    },
    select: (data) => data.data,
    options:{
      keepPreviousData: true,
    }
  });
  const products = data
    ? Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }))
    : [];
  return {products, status};
}
