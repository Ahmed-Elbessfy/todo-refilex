import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faSquarePen,
  faSackXmark,
} from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import store from "./store";

const app = createApp(App).component("fa", FontAwesomeIcon);

library.add(fas, faSquarePen, faSackXmark);

app.use(router);
app.use(store);

app.mount("#app");
