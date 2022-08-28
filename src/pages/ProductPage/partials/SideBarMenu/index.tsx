import { ISideBarMenuProps } from './SideBarMenuProps';
import styles from './SideBarMenu.module.scss';

const SideBarMenu = ({ data }: ISideBarMenuProps): JSX.Element => {
  return (
    <div className="max-w-[225px] md:max-w-full flex flex-col w-full text-md gap-5 md:order-2 ">
      <div className="flex flex-col gap-3">
        <span className="flex gap-4 bg-product-page-bg p-3 rounded-md">{`#${
          data?.popularity ?? 'Unknown'
        } Most Popular All Time`}</span>

        <span className="flex gap-4 bg-product-page-bg p-3 rounded-md">{`#${
          data?.rank ?? 'Unknown'
        } Highest Rated 2022`}</span>
      </div>

      <div className="flex flex-col text-contrast-gray gap-4 bg-product-page-bg p-8 rounded-md">
        <div className={styles['sidebar-item']}>
          <span>Format:</span>
          <span>{data?.type ?? 'Unknown'}</span>
        </div>
        <div className={styles['sidebar-item']}>
          <span>Episodes:</span>
          <span>{data?.episodes ?? 'Unknown'}</span>
        </div>
        <div className={styles['sidebar-item']}>
          <span>Duration:</span>
          <span>{data?.duration ?? 'Unknown'}</span>
        </div>
        <div className={styles['sidebar-item']}>
          <span>Status:</span>
          <span>{data?.status ?? 'Unknown'}</span>
        </div>
        <div className={styles['sidebar-item']}>
          <span>Start-End Date:</span>
          <time dateTime={data?.aired?.from}>
            {data?.aired?.string ?? 'Unknown'}
          </time>
        </div>
        <div className={styles['sidebar-item']}>
          <span> Season:</span>
          <span>{data?.season ?? 'Unknown'}</span>
        </div>
        <div className={styles['sidebar-item']}>
          <span> Reating:</span>
          <span>{data?.rating ?? 'Unknown'}</span>
        </div>
        <div className={styles['sidebar-item']}>
          <span>Score:</span>
          <span>{data?.score ?? 'Unknown'}</span>
        </div>
        <div className={styles['sidebar-item']}>
          <span>Source:</span>
          <span>{data?.source ?? 'Unknown'}</span>
        </div>
        <div>
          <span>Producers:</span>
          {data?.producers ? (
            <ul>
              {data?.producers.map((item) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.mal_id}
                  href={item.url}
                >
                  <li>{item.name}</li>
                </a>
              ))}
            </ul>
          ) : (
            'Unknown'
          )}
        </div>
        <div>
          <span>Genres:</span>
          {data?.genres ? (
            <ul>
              {data?.genres.map((item) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.mal_id}
                  href={item.url}
                >
                  <li>{item.name}</li>
                </a>
              ))}
            </ul>
          ) : (
            'Unknown'
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
