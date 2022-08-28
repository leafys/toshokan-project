type WatchImages = {
  jpg: {
    image_url: string;
  };
};

export type WatchDataItems = {
  mal_id: number;
  url: string;
  title: string;
  episode: string;
  images: WatchImages;
};

type WatchEpisodes = {
  episodes: WatchDataItems[];
};

export interface IWatchItemProps {
  pathName: string;
  data: WatchEpisodes;
}
