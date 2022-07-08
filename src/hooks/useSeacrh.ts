import { axios } from '@plugins';

type ISearch = {
  searchCategory: string;
  searchParams: { [x: string]: string };
};

export const useSeacrh = ({
  searchCategory,
  searchParams,
}: ISearch): (() => Promise<void>) => {
  return async () => {
    return await axios({
      method: 'GET',
      url: `${searchCategory}`,
      params: { q: searchParams[searchCategory] },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
