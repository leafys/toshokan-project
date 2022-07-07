import axios from 'axios';
import { useQuery } from 'react-query';

export interface ITopAnime {
  images: {
    jpg: Images;
  };
  mal_id: number;
  title: string;
  type: string;
}

export type Images = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export const useHightLight = (limit = 15) => {
  return useQuery(
    'HighLight',
    async () => {
      const responce = await axios.get('https://api.jikan.moe/v4/top/anime', {
        params: { limit: limit },
      });
      return responce.data.data;
    },
    {
      onError: (err: any) => {
        console.log('error');
      },
    }
  );
};
