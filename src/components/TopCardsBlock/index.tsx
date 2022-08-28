import CardsBlock from '@components/CardsBlock';
import MyButton from '@components/UI/buttons/MainButton';
import {
  IError,
  ITopAndUncomingTitle,
} from '@interfaces/ITopAndUpcomingTitles';
import { memo, useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import TitlesService from '@services/TitlesService';
import Spinner from '@components/Spinner';

const TopBlock = memo((): JSX.Element => {
  const [topTitles, setTopTitles] = useState<ITopAndUncomingTitle[]>([]);
  const [page, setPage] = useState<number>(1);
  const categoryName = localStorage.getItem('selectedСategory');

  const { t } = useTranslation();

  const { isLoading } = useQuery(
    ['top anime', page, categoryName],
    () => TitlesService.getAnime({ page, category: categoryName }),
    {
      onSuccess: ({ data }) => {
        setTopTitles([...topTitles, ...data.data]);
      },
      onError: (error: IError) => {
        alert(error.message);
      },
    }
  );

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
          {isLoading ? <Spinner /> : <span>{t('topBlock.btnLoader')}</span>}
        </MyButton>
      )}
    </div>
  );
});

export default TopBlock;
