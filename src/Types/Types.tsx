export interface IPosts {
  title?: string;
  header_image?: string;
  read_time?: string;
  id?: string;
  author?: string;
}

export interface IEditions {
  title: string;
  release_date: date;
  edition: string;
  cover: string;
}

interface date {
  seconds: number;
}
