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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

export function registerPlugins(app) {
  app.use(PrimeVue).use(router).use(pinia);
  app.component("VButton", Button);
  app.component("VAutoComplete", AutoComplete);
  app.component("VChip", Chip);
  app.component("VDataTable", DataTable);
  app.component("VColumn", Column);
  app.component("VColumnGroup", ColumnGroup);
  app.component("VRow", Row);
  app.component("VDialog", Dialog);
  app.component("VInputText", InputText);
  app.component("VToast", Toast);
  app.use(ToastService);
}
