import CafeMain from "./comps/CafeMain";
import CafeNav from "./comps/CafeNav";
import "./css/App.css";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="head">
          <h1 className="title">나만의 카페 레시피</h1>
          <CafeNav />
        </div>
      </header>
      <CafeMain />
    </div>
  );
}

export default App;
