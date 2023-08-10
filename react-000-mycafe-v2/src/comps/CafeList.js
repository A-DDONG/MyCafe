import CafeItem from "./CafeItem";
import { useCafe } from "./CafeMain";

const CafeList = () => {
  const { cafeList } = useCafe();
  console.log("cafeList in CafeList:", cafeList);
  const cafeItemList = cafeList.map((cafe) => {
    return <CafeItem item={cafe} key={cafe.id} />;
  });
  return (
    <>
      <h1>레시피 리스트</h1>
      {cafeItemList}
    </>
  );
};

export default CafeList;
