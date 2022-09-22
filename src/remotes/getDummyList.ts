import { DummyListResponse } from "models/dummyList";
import { httpClient } from "utils/httpClient";

export function getDummyList() {
  return httpClient.get<DummyListResponse>('https://dummyjson.com/products')
}