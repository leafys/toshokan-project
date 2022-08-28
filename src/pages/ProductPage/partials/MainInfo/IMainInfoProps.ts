import { NavigateFunction } from 'react-router';

type WebpImages = {
  webp: {
    image_url: string;
  };
};

type MainInfoData = {
  title: string;
  synopsis: string;
  images: WebpImages;
};

export interface IMainInfoProps {
  data: MainInfoData;
  navigate: NavigateFunction;
  pathName: string;
}
