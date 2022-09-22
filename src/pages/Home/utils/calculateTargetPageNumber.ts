import { match } from "ts-pattern";

export function calculateTargetPageNumber({
  type,
  currentPageNumber
}: { type?: 'nextPage' | 'prevPage'; currentPageNumber: number }): number {
  const targetPageNumber = match(type)
    .with('nextPage', () => currentPageNumber + 1)
    .with('prevPage', () => currentPageNumber - 1)
    .otherwise(() => 0);

  return Math.max(0, targetPageNumber);
}