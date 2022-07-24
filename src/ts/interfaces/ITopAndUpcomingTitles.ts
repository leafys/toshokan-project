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

export interface IPopularTitles {
  data: ITopAndUncomingTitle[];
}

export interface ITitlePagination {
  current_page: number;
  has_next_page: boolean;
  last_visible_page: number;
  items: {
    count: number;
    per_page: number;
    total: number;
  };
}
