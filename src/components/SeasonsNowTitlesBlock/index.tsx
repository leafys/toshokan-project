import TitlesService from '@services/TitlesService';
import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SeasonsNowDescPart from './partials/SeasonsNowDescPart';
import {
  IGroupInfo,
  ISeasonsNowTitlesBlockItems,
} from '@interfaces/ITopAndUpcomingTitles';
import Spinner from '@components/Spinner';

const limit: number = 5;

const SeasonsNowTitlesBlock = (): JSX.Element => {
  const { ref: observerElem, inView: myElemVisible } = useInView();

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      'seasons now',
      ({ pageParam = 1 }) =>
        TitlesService.getSeasonsNowTitles({ limit, page: pageParam }),

      {
        getNextPageParam: (lastPage, pages) =>
          lastPage.data.pagination.has_next_page ? pages.length + 1 : undefined,
      }
    );

  useEffect(() => {
    myElemVisible && fetchNextPage();
  }, [fetchNextPage, myElemVisible]);

  return (
    <section className="container">
      <h1 className="text-xxl font-bold">Seasons now</h1>
      <div className="gap-4 m-xs-:gap-7 flex flex-row tabletLg-:flex-col justify-between flex-wrap w-full">
        {data?.pages.map((group: IGroupInfo) =>
          group.data.data.map((item: ISeasonsNowTitlesBlockItems) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              key={item.mal_id}
              className="flex gap-5 tabletLg-:basis-full basis-[calc(50%_-_1rem)] m-xs-:gap-2"
            >
              <Link
                className="max-w-[195px] lessMd:max-w-[150px] m-xs-:max-w-[115px] w-full"
                to={`product-page/${item.mal_id}`}
              >
                <img src={item.images.webp.image_url} alt="test" />
              </Link>

              <SeasonsNowDescPart {...item} />
            </motion.div>
          ))
        )}
      </div>
      <div className="flex justify-center" ref={observerElem}>
        {isFetchingNextPage && hasNextPage && <Spinner />}
      </div>
    </section>
  );
};

export default SeasonsNowTitlesBlock;
