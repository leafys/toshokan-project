type AiredInfo = {
  from: string;
  string: string;
};

type ProducersData = {
  mal_id: number;
  name: string;
  url: string;
};

type GenresData = {
  mal_id: number;
  name: string;
  url: string;
};

type ISideBarData = {
  type: string;
  episodes: number;
  duration: string;
  status: string;
  aired: AiredInfo;
  season: string;
  rating: string;
  score: number;
  source: string;
  genres: GenresData[];
  popularity: number;
  rank: number;
  producers: ProducersData[];
};

export interface ISideBarMenuProps {
  data: ISideBarData;
}
