import { axios } from '@plugins';

type ISearch = {
  categoryFromLocalstore: string;
  searchParams: { [x: string]: string };
};

export const useSeacrh = ({
  categoryFromLocalstore,
  searchParams,
}: ISearch): (() => Promise<void>) => {
  return async () => {
    return await axios({
      method: 'GET',
      url: `${categoryFromLocalstore}`,
      params: { q: searchParams[categoryFromLocalstore] },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
