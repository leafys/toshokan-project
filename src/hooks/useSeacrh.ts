import { axios } from '@plugins';

type ISearch = {
  searchCategory: string;
  searchParams: object;
};

export const useSeacrh = ({
  searchCategory,
  searchParams,
}: ISearch): (() => Promise<void>) => {
  const data = async () => {
    await axios({
      method: 'GET',
      url: `https://jikan1.p.rapidapi.com/search/${searchCategory}`,
      params: { q: searchParams },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return data;
};
