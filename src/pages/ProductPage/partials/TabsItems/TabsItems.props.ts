type entryItems = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

type relationsData = {
  relation: string;
  entry: entryItems[];
};

type themeData = {
  endings: string[];
  openings: string[];
};

type trailerImagesData = {
  image_url: string;
  large_image_url: string;
  maximum_image_url: string;
  medium_image_url: string;
  small_image_url: string;
};

type trailerData = {
  embed_url: string;
  url: string;
  youtube_id: string;
  images: trailerImagesData;
};

type TabsItemData = {
  relations: relationsData[];
  theme: themeData;
  trailer: trailerData;
};

export interface ITabsItemsProps {
  data: TabsItemData;
}
