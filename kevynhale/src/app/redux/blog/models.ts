export interface IBlogState {
  list: {
    entries: IBlogEntry[];
    loading: boolean;
    hasError: boolean;
    error: Error;
    searchValue: string;
  }
  selected: {
    id: string
    entry: IBlogEntry;
    loading: boolean;
    hasError: boolean;
    error: Error;
  }
}

export interface IBlogEntry {
  id: string;
  imageSummaryUrl?: string;
  imageBodyUrl?: string;
  date?: string;
  title?: string;
  summary?: string;
  body?: string;
}