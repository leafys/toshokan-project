import CardsBlock from '@components/CardsBlock';
import MyButton from '@components/UI/Buttons/MainButton';
import {
  IError,
  ITopAndUncomingTitle,
} from '@interfaces/ITopAndUpcomingTitles';
import { axios } from '@plugins';
import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import style from './TopBlock.module.scss';
import { useTranslation } from 'react-i18next';

const TopBlock = memo((): JSX.Element => {
  const [topTitles, setTopTitles] = useState<ITopAndUncomingTitle[]>([]);
  const [page, setPage] = useState<number>(1);

  const { t } = useTranslation();

  const getTopAnime = async () => {
    return await axios({
      method: 'GET',
      url: 'top/anime',
      params: { page },
    });
  };

  const { isLoading } = useQuery(['top anime', page], getTopAnime, {
    onSuccess: ({ data }) => {
      setTopTitles([...topTitles, ...data.data]);
    },
    onError: (error: IError) => {
      alert(error.message);
    },
  });

  return (
    <div className="container flex flex-col items-center">
      <h1 className="flex text-xxl pb-4 font-bold self-start">
        {t('top_block.title')}
      </h1>

      <CardsBlock data={topTitles} isLoading={isLoading} />
      {page <= 11 && (
        <MyButton
          purple
          onClick={() => {
            setPage(page + 1);
          }}
          className="my-10 px-30 py-10 rounded-md sm:px-25 sm:py-3"
        >
          {isLoading ? (
            <motion.div
              className={style['ShowMore-loader']}
              initial={{ rotate: '0deg' }}
              animate={{ rotate: '360deg' }}
              transition={{
                duration: 1.2,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          ) : (
            <span>{t('topBlock.btnLoader')}</span>
          )}
        </MyButton>
      )}
    </div>
  );
});

export default TopBlock;
