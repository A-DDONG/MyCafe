import { useState } from "react";
import { initData } from "../data/initData";
import { useCafe } from "./CafeMain";

const CafeInput = () => {
  const { cafe, setCafe, cafeList, setCafeList, cafeInput } = useCafe();
  // const [cafe, setCafe] = useState();
  // const [cafe, setCafe, cafeInput] = props;
  // const [recipeCount, setRecipeCount] = useState(1);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCafe({ ...cafe, [name]: value });
  };

  // const addRecipeHandler = () => {
  //   setRecipeCount(recipeCount + 1);
  // };
  const btnClickHandler = (e) => {
    e.preventDefault(); // 폼 제출을 방지하려면 이 코드를 추가해야 합니다.
    cafeInput({
      c_nickname: cafe.c_nickname,
      c_division: cafe.c_division,
      c_name: cafe.c_name,
      c_recipe: cafe.c_recipe,
      c_making: cafe.c_making,
    });
  };

  return (
    <>
      <h1>레시피 만들기</h1>
      <section className="main">
        <div className="cafe input">
          <label>작성자</label>
          <input
            name="c_nickname"
            placeholder="작성자"
            onChange={inputChangeHandler}
          />
        </div>
        {/* <div className="cafe input">
          <label>메뉴구분</label>
          <input
            name="c_division"
            placeholder="메뉴구분"
            onChange={inputChangeHandler}
          />
        </div> */}
        <div className="cafe input">
          <label>메뉴구분</label>
          <select
            name="c_division"
            onChange={inputChangeHandler}
            value={cafe.c_division || ""}
          >
            <option value="">선택</option>
            <option value="커피">커피</option>
            <option value="디카페인커피">디카페인 커피</option>
            <option value="차">차</option>
            <option value="논커피">논커피</option>
            <option value="기타">기타</option>
            {/* 여기에 추가적인 옵션을 추가하실 수 있습니다 */}
          </select>
        </div>
        <div className="cafe input">
          <label>메뉴이름</label>
          <input
            name="c_name"
            placeholder="메뉴이름"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="cafe input">
          <label>레시피</label>
          <input
            name="c_recipe"
            placeholder="레시피"
            onChange={inputChangeHandler}
          />
        </div>
        {/* {[...Array(recipeCount)].map((_, index) => (
          <div key={index} className="cafe input">
            <label>레시피 {index + 1}</label>
            <input
              name={`c_recipe_${index + 1}`}
              placeholder={`레시피 ${index + 1}`}
              onChange={inputChangeHandler}
            />
          </div>
        ))}

        <div className="button">
          <button type="button" onClick={addRecipeHandler}>
            레시피 추가하기
          </button>
        </div> */}
        <div className="cafe input">
          <label>조리방법</label>
          <input
            name="c_making"
            placeholder="조리방법"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="button">
          <button onClick={btnClickHandler}>저장</button>
        </div>
      </section>
    </>
  );
};
export default CafeInput;
