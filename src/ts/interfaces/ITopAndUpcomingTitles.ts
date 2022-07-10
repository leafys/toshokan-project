export interface IError {
  message: string;
}

type jpgTypes = {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
};

export interface ITopAndUncomingTitles {
  mal_id?: number;
  title: string;
  type: string;
  score?: number;
  year?: number;
  synopsis?: string;
  images: {
    jpg: jpgTypes;
  };
}

export interface IPopularTitles {
  data: ITopAndUncomingTitles[];
}
