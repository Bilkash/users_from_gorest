import {createBrowserRouter} from "react-router-dom";

import Main from "./pages/Main";
import Users from "./pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/users",
    element: <Users/>
  }
]);
