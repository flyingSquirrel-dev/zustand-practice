import { DummyListResponse } from "models/dummyList";
import { getDummyList } from "remotes/getDummyList";
import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { calculateTargetPageNumber } from "../utils/calculateTargetPageNumber";

interface Props {
  data: DummyListResponse;
  currentPage: number;
  actions: {
    loadPage: (type?: 'nextPage' | 'prevPage') => void
  };
}

const INITIAL_DATA: DummyListResponse = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
};

export const useDummyListStore = create<Props>()(
  devtools(
    (set, get) => ({
      data: INITIAL_DATA,
      currentPage: 0,
      actions: {
        loadPage: async (type) => {
          const currentPageNumber = get().currentPage;
          const destinationPageNumber = calculateTargetPageNumber({ type, currentPageNumber })

          const response = await getDummyList({ pageNumber: destinationPageNumber })

          set({ data: response, currentPage: destinationPageNumber })
        },
      }
    }),
    { name: 'dummy-list-store' }
  )
)