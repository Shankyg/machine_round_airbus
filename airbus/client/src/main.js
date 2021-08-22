import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.css"
import "datatables.net-buttons-bs4/js/buttons.bootstrap4";
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css"
import "datatables.net-searchbuilder-bs4";
import "datatables.net-searchpanes-bs4";
import { FontAwesomeIcon } from './plugins/font-awesome'

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");