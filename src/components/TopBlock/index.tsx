import CardsBlock from '@components/CardsBlock';
import MyButton from '@components/UI/Buttons/MainButton';
import {
  IError,
  ITopAndUncomingTitle,
} from '@interfaces/ITopAndUpcomingTitles';
import { axios } from '@plugins';
import { memo, useState } from 'react';
import { useQuery } from 'react-query';
import style from './TopBlock.module.scss';

const TopBlock = memo(() => {
  const [topTitles, setTopTitles] = useState<ITopAndUncomingTitle[]>([]);
  const [page, setPage] = useState<number>(1);

  const test = async () => {
    return await axios({
      method: 'GET',
      url: 'top/anime',
      params: { page },
    });
  };

  const { isLoading } = useQuery(['top anime', page], test, {
    onSuccess: ({ data }) => {
      setTopTitles([...topTitles, ...data.data]);
    },
    onError: (error: IError) => {
      alert(error.message);
    },
  });

  return (
    <div className="flex flex-col items-center">
      <CardsBlock data={topTitles} />
      {page <= 11 && (
        <MyButton
          purple
          onClick={() => {
            setPage(page + 1);
          }}
          className="my-10 px-30 py-10 rounded-md sm:px-25 sm:py-3"
        >
          {isLoading ? (
            <div className={style['ShowMore-loader']} />
          ) : (
            <span>Show More</span>
          )}
        </MyButton>
      )}
    </div>
  );
});

export default TopBlock;
