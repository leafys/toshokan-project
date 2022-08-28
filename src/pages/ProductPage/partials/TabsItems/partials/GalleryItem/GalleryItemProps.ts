type GalleryImages = {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
};

export interface GalleryData {
  jpg: GalleryImages;
  webp: GalleryImages;
}

export interface IGalleryItem {
  pathName: string;
  data: GalleryData[];
}
