import { useEffect } from "react";
import shallow from 'zustand/shallow'

import { useDummyListStore } from "../store/list";

export function useDummyList() {
  const { products, loadPage } = useDummyListStore(state => ({
    products: state.data.products,
    loadPage: state.actions.loadPage
  }), shallow);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  return { products, loadPage };
}