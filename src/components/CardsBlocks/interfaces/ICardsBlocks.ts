export interface IError {
  message: string;
}

type jpgTypes = {
  ImageType: string;
  small_image_url: string;
  large_image_url: string;
};

export interface IPopularTitlesItem {
  mal_id?: number;
  title: string;
  type: string;
  score: number;
  year: number;
  images: {
    jpg: jpgTypes;
  };
}

export interface IPopularTitles {
  data: IPopularTitlesItem[];
}
