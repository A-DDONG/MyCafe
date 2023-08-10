const CafeNav = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="nav main">
      <ul>
        <li onClick={goHome}>홈으로</li>
        <li>내 레시피</li>
      </ul>
    </div>
  );
};
export default CafeNav;
