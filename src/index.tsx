import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "antd/dist/reset.css"; // Para la versión 5 de Ant Design
import { ConfigProvider } from "antd";
import { themeConfig } from "./themeConfig";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ConfigProvider theme={themeConfig}>
      <App />
    </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
