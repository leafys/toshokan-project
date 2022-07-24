import { axios } from '@plugins';

type ISearch = {
  searchCategory: string | null;
  searchValue: string;
  setTest: React.Dispatch<any>;
};

export const useSeacrh = ({
  searchCategory,
  searchValue,
  setTest,
}: ISearch): (() => Promise<void>) => {
  return async () => {
    return await axios({
      method: 'GET',
      url: `${searchCategory}`,
      params: { q: searchValue },

    })
      .then(({ data }) => {
        console.log(data);
        setTest(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};


