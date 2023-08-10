import CafeInput from "./CafeInput";
import { useState, useEffect } from "react";
import "../css/input.css";
import { initData } from "../data/initData";

const CafeMain = () => {
  const [cafe, setCafe] = useState(() => initData());

  return (
    <div className="container">
      <h1>레시피 만들기</h1>
      <CafeInput />
    </div>
  );
};

export default CafeMain;
