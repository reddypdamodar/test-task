import "./App.css";
import Main from "./Components/Main";
import { Fetchdata } from "./Fetch/Fetchdata";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/fetchdata",
      element: <Fetchdata />,
    },
  ]);

  return (
    <div className="App  ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
