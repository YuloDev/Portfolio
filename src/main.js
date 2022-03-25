import "./main.css";
import router from "./router/index.routes";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
