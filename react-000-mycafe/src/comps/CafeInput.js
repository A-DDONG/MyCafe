import { useState } from "react";

const CafeInput = () => {
  const [cafe, setCafe] = useState();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCafe({ ...cafe, [name]: value });
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
        <div className="cafe input">
          <label>메뉴구분</label>
          <input
            name="c_division"
            placeholder="메뉴구분"
            onChange={inputChangeHandler}
          />
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
