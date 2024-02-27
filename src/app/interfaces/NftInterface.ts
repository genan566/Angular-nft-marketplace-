export interface NftInterface {
  id: number;
  title: string;
  description: string;
  owner: number;
  image: string;
  categories_trending: number[];
  created_at: string;
  price: string;
}

export interface NFTPullInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: NftInterface[];
}
