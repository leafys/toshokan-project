import CardsBlock from '@components/CardsBlock';
import { useSeacrh } from '@hooks/useSeacrh';
import { IPopularTitles } from '@interfaces/ITopAndUpcomingTitles';
import { axios } from '@plugins';
import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

const SeacrhCardsBlock = () => {
  let [searchParams] = useSearchParams();
  const searchValue = (searchParams.values().next().value ?? undefined) || '';
  const searchCategory = localStorage.getItem('selectedСategory');
  const [pages, setPages] = useState<IPopularTitles[]>([]);
  const [test, setTest] = useState<any>([]);

  // const searchFunc = useSeacrh({ searchCategory, searchValue, setTest });

  const getSearchData = async (page = 1) => {
    const { data } = await axios({
      method: 'GET',
      url: `${searchCategory}`,
      params: { q: searchValue, page },
    });

    return data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['projects'],
    ({ pageParam }) => getSearchData(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.pagination.has_next_page) {
          return pages.length + 1;
        } else {
          console.log(pages);
          return undefined;
        }
      },
      onSuccess: ({ pages }) => {
        setPages(pages);
      },
    }
  );

  console.log(pages);

  // useEffect(() => {
  //   searchFunc();
  // }, [searchValue, searchCategory]);

  return (
    <div>
      <CardsBlock data={test.data} />;
      <button onClick={() => fetchNextPage()}>sfsfs</button>
    </div>
  );
};

export default SeacrhCardsBlock;
