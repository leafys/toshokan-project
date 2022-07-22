import CardsBlock from '@components/CardsBlock';
import {
  IError,
  ITopAndUncomingTitle,
} from '@interfaces/ITopAndUpcomingTitles';
import { axios } from '@plugins';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import style from './SeacrhCardsBlock.module.scss';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const SeacrhCardsBlock = (): JSX.Element => {
  const { t } = useTranslation();
  let [searchParams] = useSearchParams();
  const searchValue = (searchParams.values().next().value ?? undefined) || '';
  const searchCategory = localStorage.getItem('selectedСategory');
  const [searchData, setSearchData] = useState<ITopAndUncomingTitle[]>([]);
  const [pages, setPages] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { ref: observerRef, inView: myElemVisible } = useInView({
    rootMargin: '200px 0px 0px 0px',
  });

  useEffect(() => {
    setPages(null);
    setCurrentPage(1);
  }, [searchParams]);

  useMemo(() => {
    setCurrentPage((currentPage) =>
      myElemVisible ? currentPage + 1 : currentPage
    );
  }, [myElemVisible]);

  const getSearchData = async () => {
    return await axios({
      method: 'GET',
      url: `${searchCategory}`,
      params: { q: `${searchValue}`, page: currentPage },
    });
  };

  const { isLoading } = useQuery(
    ['top anime', currentPage, searchValue, searchCategory],
    getSearchData,
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
      <div className="pb-4 flex gap 20px">
        <h1 className="text-xxl font-bold">{t('search_block.title')}</h1>
        <span>{pages?.items.total}</span>
      </div>

      <CardsBlock data={searchData} isLoading={isLoading} />
      {isLoading ? null : !pages?.has_next_page ? null : (
        <div ref={observerRef} className={style.observer} />
      )}
    </div>
  );
};

export default SeacrhCardsBlock;
