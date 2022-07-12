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
