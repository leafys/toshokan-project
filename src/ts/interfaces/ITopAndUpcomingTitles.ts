export interface IError {
  message: string;
}

type jpgTypes = {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
};

type Genre = {
  mal_id: number;
  name: string;
};
type Themes = {
  mal_id: number;
  name: string;
};

export interface ITopAndUncomingTitle {
  mal_id: number;
  title: string;
  isLoading: boolean;
  type: string;
  score: number;
  year: number;
  synopsis: string;
  episodes: number;
  genres: Genre[];
  themes: Themes[];
  status: string;
  images: {
    jpg: jpgTypes;
  };
}

type webpTypesSeasonsNow = {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
};

type genresSeasonsNow = {
  mal_id: number;
  name: string;
};

type airedSeasonsNow = {
  from: string;
  string: string;
};

export interface ISeasonsNowTitlesBlockItems {
  mal_id: number;
  images: {
    webp: webpTypesSeasonsNow;
  };
  title: string;
  synopsis: string;
  genres: genresSeasonsNow[];
  score: number;
  aired: airedSeasonsNow;
}

export interface IPopularTitles {
  data: ITopAndUncomingTitle[];
}

export interface IDataPagination {
  current_page: number;
  has_next_page: boolean;
  last_visible_page: number;
  items: {
    count: number;
    per_page: number;
    total: number;
  };
}
