import { axios } from '@plugins';

type ISearch = {
  searchCategory: string;
  searchParams: object;
};

export const useSeacrh = ({
  searchCategory,
  searchParams,
}: ISearch): (() => Promise<void>) => {
  return async () => {
    return await axios({
      method: 'GET',
      url: `search/${searchCategory}`,
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
