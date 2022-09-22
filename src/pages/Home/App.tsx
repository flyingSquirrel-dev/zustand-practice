import { Suspense } from "react";

import { useSuspendedDummyList } from "./hook/useSuspendedDummyList";

function Component() {
  const { data } = useSuspendedDummyList();

  return (
    <>
      {data?.products.map(product => (
        <div key={product.id}>title: {product.title}</div>
      ))}
    </>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div>로딩</div>}>
      <Component />
    </Suspense>
  )
}
