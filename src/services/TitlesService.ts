import { axios } from '@plugins';
import { AxiosResponse } from 'axios';

type SearchedTitlesAttrs = {
  searchCategory: string;
  searchValue: string;
  currentPage: number;
};

type SeasonsNowTitlesAttrs = {
  limit: number;
  page: number;
};

type TabsDataAttr = {
  id: string | number | undefined;
  getQueryTab: string | undefined;
};

type TitleByIdAttr = {
  category: string | null;
  id: string | number | undefined;
};

type AnimeAttrs = {
  page: number;
  category: string | null;
};

export default class TitlesService {
  static async getAnime({
    page,
    category,
  }: AnimeAttrs): Promise<AxiosResponse> {
    return await axios({
      method: 'GET',
      url: `top/${category}`,
      params: { page },
    });
  }

  static async getUpcomingTitles(limit: number): Promise<AxiosResponse> {
    return await axios({
      method: 'GET',
      url: 'seasons/upcoming',
      params: { limit },
    }).then((res) => res.data);
  }

  static async getSearchedTitles({
    searchCategory,
    searchValue,
    currentPage,
  }: SearchedTitlesAttrs): Promise<AxiosResponse> {
    return await axios({
      method: 'GET',
      url: searchCategory,
      params: { q: searchValue, page: currentPage },
    });
  }

  static async getSeasonsNowTitles({
    limit,
    page,
  }: SeasonsNowTitlesAttrs): Promise<AxiosResponse> {
    return await axios({
      method: 'GET',
      url: 'seasons/now',
      params: { limit, page },
    });
  }

  static async getTitleById({
    category,
    id,
  }: TitleByIdAttr): Promise<AxiosResponse> {
    return await (
      await axios.get(`${category}/${id}/full`)
    ).data;
  }

  static async getTabsData({
    id,
    getQueryTab,
  }: TabsDataAttr): Promise<AxiosResponse | null> {
    if (!getQueryTab) return null;

    return await await (
      await axios.get(`anime/${id}/${getQueryTab}`)
    ).data;
  }
}
