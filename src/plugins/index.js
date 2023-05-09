/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import PrimeVue from "primevue/config";
import pinia from "../store";
import router from "../router";
// CSS
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "@/styles/main.css";

// Components
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";
import Chip from "primevue/chip";

export function registerPlugins(app) {
  app.use(PrimeVue).use(router).use(pinia);
  app.component("VButton", Button);
  app.component("VAutoComplete", AutoComplete);
  app.component("VChip", Chip);
}
