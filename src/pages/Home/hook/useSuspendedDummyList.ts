import { QUERY_KEY } from "constant/queryKey";
import { useSuspendedQuery } from "hook/useSuspendedQuery";
import { getDummyList } from "remotes/getDummyList";

interface Props {
  pageNumber: number;
}

export function useSuspendedDummyList({ pageNumber }: Props) {
  return useSuspendedQuery(QUERY_KEY.DUMMY_LIST({ pageNumber }), () => getDummyList({ pageNumber }))
}