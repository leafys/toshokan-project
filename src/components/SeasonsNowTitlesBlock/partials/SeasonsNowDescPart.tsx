import styles from './SeasonsNowDescPart.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ISeasonsNowTitlesBlockItems } from '@interfaces/ITopAndUpcomingTitles';

const SeasonsNowDescPart = (item: ISeasonsNowTitlesBlockItems): JSX.Element => {
  const unknown = <span className="text-contrast-gray">Unknown</span>;

  return (
    <div className="w-full flex flex-col gap-2 lessMd:gap-[0.5rem]">
      <Link className="max-w-max" to="#">
        <h1
          className={cn([
            styles['title-options'],
            'text-justify m-xs-:text-left m-sm-:text-base m-xs-:text-md text-light-orange',
          ])}
        >
          {item.title ?? unknown}
        </h1>
      </Link>

      <p className={cn([styles['desc-options'], 'm-sm-:text-md'])}>
        {item.synopsis ?? unknown}
      </p>

      <ul className="flex flex-wrap items-center gap-x-2 m-sm-:text-md">
        <li>Genres:</li>

        {item.genres.length
          ? item.genres.map((genre: any) => (
              <li key={genre.mal_id}>
                <Link className="text-light-blue" to="#">
                  {genre.name ?? unknown}
                </Link>
              </li>
            ))
          : unknown}
      </ul>

      <div className="flex gap-x-2 m-sm-:text-md">
        <span>Score:</span>
        <span>{item.score ?? unknown}</span>
      </div>

      <div className="flex gap-x-2 m-sm-:text-md flex-wrap">
        <span>Premiere:</span>
        <time dateTime={item.aired.from}>
          {item.aired.string.split('to')[0]}
        </time>
      </div>
    </div>
  );
};

export default SeasonsNowDescPart;
