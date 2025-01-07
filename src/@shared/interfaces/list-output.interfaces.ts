export interface IListOutput<E> {
  currentPage: number;
  totalItemsInPage: number;
  nextPage: boolean;
  lastPage: boolean;
  totalItems: number;
  totalPages: number;
  items: E[];
}
