import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Card from "./Card";
// import CardList from "./Component/CardList";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./Container/App";

// import 進來的要大寫才能讀到名稱

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
