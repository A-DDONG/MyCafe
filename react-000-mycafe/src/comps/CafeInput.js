import { useState } from "react";

const CafeInput = () => {
  // const [cafe, setCafe] = useState();
  const [cafe, setCafe] = useState({});
  const [recipeCount, setRecipeCount] = useState(1);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCafe({ ...cafe, [name]: value });
  };

  const addRecipeHandler = () => {
    setRecipeCount(recipeCount + 1);
  };

  return (
    <>
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
        {/* <div className="cafe input">
          <label>레시피</label>
          <input
            name="c_recipe"
            placeholder="레시피"
            onChange={inputChangeHandler}
          />
        </div> */}
        {[...Array(recipeCount)].map((_, index) => (
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
        </div>
        <div className="cafe input">
          <label>조리방법</label>
          <input
            name="c_making"
            placeholder="조리방법"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="button">
          <button>저장</button>
        </div>
      </section>
    </>
  );
};
export default CafeInput;
