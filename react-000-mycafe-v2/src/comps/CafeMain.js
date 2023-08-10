import CafeInput from "./CafeInput";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import "../css/input.css";
import "../css/list.css";
import { initData } from "../data/initData";
import uuid from "react-uuid";
import CafeList from "./CafeList";
import { Outlet } from "react-router-dom";

export const CafeContext = createContext();

export const useCafe = () => {
  return useContext(CafeContext);
};

const CafeMain = () => {
  const [cafe, setCafe] = useState(initData);
  const [cafeList, setCafeList] = useState(() => {
    return localStorage.getItem("CAFELIST")
      ? JSON.parse(localStorage.getItem("CAFELIST"))
      : [];
  });
  useEffect(() => {
    const resetCafe = () => {
      setCafe(initData());
      console.log("UseEffect");
      localStorage.setItem("CAFELIST", JSON.stringify(cafeList));
    };
    resetCafe();
  }, [cafeList]);

  const cafeListAdd = ({
    c_nickname,
    c_division,
    c_name,
    c_recipe,
    c_making,
  }) => {
    const newCafe = {
      ...cafe,
      id: uuid(),
      c_nickname: c_nickname,
      c_division: c_division,
      c_name: c_name,
      c_recipe: c_recipe,
      c_making: c_making,
    };
    console.log("New Cafe:", newCafe);
    setCafeList([...cafeList, newCafe]);
  };
  const cafeInput = ({
    c_nickname,
    c_division,
    c_name,
    c_recipe,
    c_making,
  }) => {
    if (!cafe.id) {
      cafeListAdd({
        c_nickname,
        c_division,
        c_name,
        c_recipe,
        c_making,
      });
    } else {
      const updateCafeList = cafeList.map((item) => {
        if (item.id === cafe.id) {
          return {
            ...item,
            c_nickname: c_nickname,
            c_division: c_division,
            c_name: c_name,
            c_recipe: c_recipe,
            c_making: c_making,
          };
        }
        return item;
      });
      setCafeList(updateCafeList);
    }
    console.log("cafeList in CafeMain:", cafeList);
  };

  return (
    <CafeContext.Provider
      value={{ cafe, setCafe, cafeList, setCafeList, cafeInput }}
    >
      {/* <CafeInput
        cafe={cafe}
        setCafe={setCafe}
        cafeList={cafeList}
        setCafeList={setCafeList}
        cafeInput={cafeInput}
      />

      <CafeList cafeList={cafeList} /> */}
      <Outlet />
    </CafeContext.Provider>
  );
};

export default CafeMain;
