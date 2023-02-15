import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main/>,
	},
	{
		path: "/users",
		element: <Users/>,
	},
	{
		path: "/user/:id",
		element: <EditUser/>,
	}
]);
