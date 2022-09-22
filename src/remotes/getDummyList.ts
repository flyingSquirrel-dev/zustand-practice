import { DummyListResponse } from "models/dummyList";
import { httpClient } from "utils/httpClient";

const DEFAULT_PAGE_SIZE = 10;

export function getDummyList({ pageNumber }: { pageNumber: number }) {
  return httpClient.get<DummyListResponse>(`https://dummyjson.com/products?limit=${DEFAULT_PAGE_SIZE}&skip=${pageNumber * DEFAULT_PAGE_SIZE}`)
}