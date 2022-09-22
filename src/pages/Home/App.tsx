import { Flex } from "components/Flex";
import { Loader } from "components/Loader";
import { Spacing } from "components/Spacing";
import { Suspense } from "react";

import { useDummyList } from "./hook/useDummyList";

function Component() {
  const { products, loadPage } = useDummyList();

  return (
    <>
      {products.length === 0
        ? <div>결과가 없어요</div>
        : products.map(product => (
          <Flex key={product.id} gap={10}>
            <div>{product.id}</div>
            <div>{product.title}</div>
          </Flex>
        ))}
      <Spacing size={20} />
      <Flex gap={10}>
        <button onClick={() => loadPage('prevPage')}>
          이전 페이지
        </button>
        <button onClick={() => loadPage('nextPage')}>
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
  // TODO: zustand가 기본적으로 <Suspense /> 지원하지 않는 듯. 맞나 확인해보기
  return (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
}
