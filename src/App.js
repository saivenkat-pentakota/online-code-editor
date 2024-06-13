import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomeScreen} from "./screens/HomeScreen";
import {PlaygroundScreen} from "./screens/PlaygroundScreen";
import { PlaygroundProvider } from "./Providers/PlaygroundProvider";
import { ModalProvider } from "./Providers/ModalProviders";

function App() {
  return (
    <div className="App">
      <PlaygroundProvider>
      <ModalProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/playground/:fileId/:folderId" element={<PlaygroundScreen/>}/>
      </Routes>
      </BrowserRouter>
      </ModalProvider>
      </PlaygroundProvider>
    </div>
  );
}

export default App;
