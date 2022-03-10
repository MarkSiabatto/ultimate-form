import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Step1 } from "./components/Steps/Step1";
import { Step2 } from "./components/Steps/Step2";
import { Step3 } from "./components/Steps/Step3";
import { Result } from "./components/Result";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";

function App() {
  return (
    <MainContainer>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Step1 />}></Route>
          <Route path="/step2" element={<Step2 />}></Route>
          <Route path="/step3" element={<Step3 />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
