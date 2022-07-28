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

export default class TitlesService {
  static async getAnime(page: number): Promise<AxiosResponse> {
    return await axios({
      method: 'GET',
      url: 'top/anime',
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

  static async getSeasonsNowTitles({ limit, page }: SeasonsNowTitlesAttrs) {
    return await axios({
      method: 'GET',
      url: 'seasons/now',
      params: { limit, page },
    });
  }
}
