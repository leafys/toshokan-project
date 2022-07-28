import CardsBlock from '@components/CardsBlock';
import {
  IDataPagination,
  IError,
  ITopAndUncomingTitle,
} from '@interfaces/ITopAndUpcomingTitles';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import TitlesService from '@services/TitlesService';

const SeacrhCardsBlock = (): JSX.Element => {
  const { t } = useTranslation();
  let [searchParams] = useSearchParams();
  const searchValue = (searchParams.values().next().value ?? undefined) || '';
  const searchCategory =
    (searchParams.keys().next().value ?? undefined) ||
    localStorage.getItem('selectedСategory');
  const [searchData, setSearchData] = useState<ITopAndUncomingTitle[]>([]);
  const [pages, setPages] = useState<IDataPagination | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { ref: observerRef, inView: myElemVisible } = useInView({
    rootMargin: '0px 0px 100px 0px',
  });

  useMemo(() => {
    setPages(null);
    setCurrentPage(1);
  }, [searchParams]);

  useMemo(() => {
    setCurrentPage((currentPage) =>
      myElemVisible ? currentPage + 1 : currentPage
    );
  }, [myElemVisible]);

  const { isLoading } = useQuery(
    ['top anime', currentPage, searchValue, searchCategory],
    () =>
      TitlesService.getSearchedTitles({
        searchCategory,
        searchValue,
        currentPage,
      }),
    {
      onSuccess: ({ data }) => {
        if (pages) {
          setSearchData((searchData) => [...searchData, ...data.data]);
        } else {
          setSearchData([...data.data]);
        }
        setPages(data.pagination);
      },
      onError: (error: IError) => {
        alert(error.message);
      },
    }
  );

  return (
    <div className="container">
      <div className="pb-4 flex gap-1 items-center">
        <h1 className="text-xxl font-bold lessMd:text-lg">
          {t('search_block.title')}
        </h1>
        <div className="w-[50px] m-w-[75px] h-full bg-purple rounded-full flex items-center justify-center text-white text-base">
          {pages?.items.total}
        </div>
      </div>
      {pages?.items.total === 0 ? (
        <div className="text-contrast-gray">{t('search_block.notfound')}</div>
      ) : (
        <>
          <CardsBlock data={searchData} isLoading={isLoading} />
          {isLoading ? null : !pages?.has_next_page ? null : (
            <div ref={observerRef} className="w-full h-[20px]" />
          )}
        </>
      )}
    </div>
  );
};

export default SeacrhCardsBlock;
