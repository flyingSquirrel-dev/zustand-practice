export interface DummyListItem {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: 4.69;
  stock: 94;
  thumbnail: string;
  title: string;
}

export interface DummyListResponse {
  limit: number;
  products: DummyListItem[];
  skip: number;
  total: number;
}