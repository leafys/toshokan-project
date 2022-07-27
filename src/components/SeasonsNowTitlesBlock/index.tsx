import TitlesService from '@services/TitlesService';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ISeasonsNowDataPagination } from './ISeasonsNowTitles';
import SeasonsNowDescPart from './partials/SeasonsNowDescPart';
import { ISeasonsNowTitlesBlockItems } from '@interfaces/ITopAndUpcomingTitles';

const limit: number = 5;

const SeasonsNowTitlesBlock = (): JSX.Element => {
  const { ref: observerElem, inView: myElemVisible } = useInView();
  const [hasNextPage, setHasNextPage] = useState<boolean[]>([]);

  const { data, fetchNextPage } = useInfiniteQuery(
    'seasons now',
    ({ pageParam = 1 }) =>
      TitlesService.getSeasonsNowTitles({ limit, page: pageParam }),

    {
      getNextPageParam: (nextPage) => {
        return nextPage.data.pagination.current_page + 1;
      },

      onSuccess: (data) => {
        setHasNextPage(
          data.pages.map(
            (item: ISeasonsNowDataPagination) =>
              item.data.pagination.has_next_page
          )
        );
      },
    }
  );

  useEffect(() => {
    hasNextPage &&
      hasNextPage[hasNextPage.length - 1] &&
      myElemVisible &&
      fetchNextPage();
  }, [fetchNextPage, myElemVisible]);

  return (
    <section>
      <div className="container gap-10 m-xs-:gap-7 flex flex-col">
        <h1 className="text-xxl font-bold">Seasons now</h1>

        {data?.pages.map((group) =>
          group.data.data.map((item: ISeasonsNowTitlesBlockItems) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              key={item.mal_id}
              className="flex gap-5 m-xs-:gap-2"
            >
              <Link
                className="max-w-[195px] lessMd:max-w-[150px] m-xs-:max-w-[115px] w-full"
                to="#"
              >
                <img src={item.images.webp.image_url} alt="test" />
              </Link>

              <SeasonsNowDescPart {...item} />
            </motion.div>
          ))
        )}

        <div ref={observerElem} />
      </div>
    </section>
  );
};

export default SeasonsNowTitlesBlock;
