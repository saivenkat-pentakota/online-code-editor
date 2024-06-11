import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomeScreen} from "./screens/HomeScreen";
import {PlaygroundScreen} from "./screens/PlaygroundScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/playground" element={<PlaygroundScreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
