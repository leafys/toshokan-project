import { axios } from "@plugins";
import { useQuery } from "react-query";

type ISearch = {
  searchCategory: string;
  searchParams: object;
};

export const useSeacrh = ({
  searchCategory,
  searchParams,
}: ISearch): (() => Promise<void>) => {
  return async () => {
    return axios({
      method: "GET",
      url: `https://jikan1.p.rapidapi.com/search/${searchCategory}`,
      params: { q: searchParams },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
