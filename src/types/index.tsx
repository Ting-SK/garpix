export interface IBook {
  id: number;
  title: string;
  author_id: number;
  created_at: number;
  image?: HTMLImageElement;
}
export interface IAuthor {
  id: number;
  last_name: string;
  first_name: string;
}

export interface IColumn {
  title: string;
  dataIndex: string;
  key: string;
}

export interface IParams {
  id: any;
}
