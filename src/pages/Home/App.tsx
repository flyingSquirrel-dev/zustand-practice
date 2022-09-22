import { Flex } from "components/Flex";
import { Loader } from "components/Loader";
import { Spacing } from "components/Spacing";
import { Suspense, useState } from "react";

import { useSuspendedDummyList } from "./hook/useSuspendedDummyList";

function Component() {
  const [pageNumber, setPageNumber] = useState<number>(0);

  const { data } = useSuspendedDummyList({ pageNumber });

  return (
    <>
      {data.products.length === 0
        ? <div>결과가 없어요</div>
        : data.products.map(product => (
          <Flex key={product.id} gap={10}>
            <div>{product.id}</div>
            <div>{product.title}</div>
          </Flex>
        ))}
      <Spacing size={20} />
      <Flex gap={10}>
        <button onClick={() => setPageNumber(prevState => (prevState - 1))}>
          이전 페이지
        </button>
        <button onClick={() => setPageNumber(prevState => prevState + 1)}>
          다음 페이지
        </button>
      </Flex>
    </>
  );
}

function Fallback() {
  return (
    <>
      <Loader />
      <button disabled>다음 페이지</button>
    </>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
}
