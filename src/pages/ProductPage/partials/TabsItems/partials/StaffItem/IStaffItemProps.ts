type ImagesInfo = {
  jpg: {
    image_url: string;
  };
};

type StaffItemPersonInfo = {
  mal_id: number;
  name: string;
  images: ImagesInfo;
  url: string;
};

export interface IStaffItemData {
  person: StaffItemPersonInfo;
  positions: string[];
}

export interface IStaffItemProps {
  pathName: string;
  data: IStaffItemData[];
}
