import { ITypesTopAndUncomingTitles } from '@interfaces/ITopAndUpcomingTitles';
import { IError } from '@interfaces/ITopAndUpcomingTitles';
import { axios } from '@plugins';
import { Dispatch } from 'react';
import { useQuery } from 'react-query';

export const useHightLight = (
  key: string,
  limit: number | undefined,
  url: string,
  setData: Dispatch<React.SetStateAction<ITypesTopAndUncomingTitles[]>>
) => {
  return useQuery(
    key,
    async () => {
      return await axios({
        method: 'GET',
        url: url,
        params: { limit },
      });
    },
    {
      onSuccess: ({ data }) => {
        setData(data.data);
        console.log(data.data);
      },
      onError: (error: IError) => {
        alert(error.message);
      },
    }
  );
};
