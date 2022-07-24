import { axios } from '@plugins';
import { AxiosResponse } from 'axios';

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

  static async getSearchedTitles(
    searchCategory: string,
    searchValue: string,
    currentPage: number
  ): Promise<AxiosResponse> {
    return await axios({
      method: 'GET',
      url: searchCategory,
      params: { q: searchValue, page: currentPage },
    });
  }

  static async getSchedulesTitles(): Promise<AxiosResponse> {
    return await axios({
      method: 'GET',
      url: 'schedules',
    });
  }
}
