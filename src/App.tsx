import React from "react";
import "./App.css";
import { SimpleMap } from "./examples";
import { MapDIContextProvider } from "./map/MapDIContext";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Hello world!<Link to={"/simple"}>Click</Link>
      </div>
    ),
  },
  {
    path: "/simple",
    element: <SimpleMap />,
  },
]);

function App() {
  return (
    <MapDIContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </MapDIContextProvider>
  );
}

export default App;
