import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CafeMain from "../comps/CafeMain";
import CafeInput from "../comps/CafeInput";
import CafeList from "../comps/CafeList";
import App from "../App";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>홈</h1> },
        {
          path: "/recipe",
          element: <CafeMain />,
          children: [
            { path: "insert", element: <CafeInput /> },
            { path: "list", element: <CafeList /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouter;
