import React from "react";
import "./App.css";
import { SimpleMap } from "./examples";
import { MapDIContextProvider } from "./map/MapDIContext";

function App() {
  return (
    <MapDIContextProvider>
      <div className="App">
        <SimpleMap />
      </div>
    </MapDIContextProvider>
  );
}

export default App;
