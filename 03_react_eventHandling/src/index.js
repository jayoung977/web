import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      {/* 컴포넌트 하나(ex.App)밖에 못넣음 */}
      <App />
    </React.StrictMode>
  );
});
// }, 1000);
// 1000: 1초
