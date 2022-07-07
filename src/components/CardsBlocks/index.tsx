import React from 'react';
import Card from './partials/Card';
import { useQuery } from 'react-query';
import { axios } from '@plugins';
import {
  IPopularTitlesItem,
  IPopularTitles,
  IError,
} from './interfaces/ICardsBlocks';

const CardsBlocks = (): JSX.Element => {
  const [topTitles, setTopTitles] = React.useState<IPopularTitlesItem[]>([]);

  useQuery(
    'top anime',
    async () => {
      return await axios.get<IPopularTitles>('top/anime');
    },
    {
      onSuccess: ({ data }) => setTopTitles(data.data),
      onError: (error: IError) => alert(error.message),
    }
  );

  return (
    <div>
      <h1 className="text-xl">Top Titles</h1>

      <div className="flex flex-wrap justify-center gap-7 pt-5">
        {topTitles.map((item) => (
          <Card
            key={item.mal_id}
            title={item.title}
            type={item.type}
            score={item.score}
            year={item.year}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsBlocks;
