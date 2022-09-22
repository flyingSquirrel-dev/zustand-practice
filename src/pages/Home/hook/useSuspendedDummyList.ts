import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "constant/queryKey";
import { getDummyList } from "remotes/getDummyList";

export function useSuspendedDummyList() {
  return useQuery(QUERY_KEY.DUMMY_LIST(), () => getDummyList(), { suspense: true })
}