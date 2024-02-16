import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import engLanguage from "../src/json/en/en_json.json";
import idLanguage from "../src/json/id/id_json.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ButtonPage } from "./components/button";
import { MultiLanguage } from "./components/main";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translate: engLanguage,
    },
    id: {
      translate: idLanguage,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
          <Route path='home' element={<ButtonPage/>} />
          <Route path='main' element={<MultiLanguage/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
