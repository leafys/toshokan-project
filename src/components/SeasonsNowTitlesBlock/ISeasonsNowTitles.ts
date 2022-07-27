type PaginationItems = {
  pagination: {
    current_page: number;
    has_next_page: boolean;
    last_visible_page: number;
    items: {
      count: number;
      per_page: number;
      total: number;
    };
  };
};

export interface ISeasonsNowDataPagination {
  data: PaginationItems;
}
