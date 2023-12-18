import {defineClientConfig} from "@vuepress/client";
import {defineAsyncComponent} from "vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";


const FooterRunTime = defineAsyncComponent(() => import("./components/FooterRunTime.vue"));
const Navbar = defineAsyncComponent(() => import("./components/Navbar.vue"));

export default defineClientConfig({
  setup() {
    if (typeof document !== "undefined") {
      document.body.setAttribute("arco-theme", "dark")
      document.oncontextmenu = function (_) {
        return false;
      };
    }
  },
  rootComponents: [
    FooterRunTime,
    Navbar,
  ],
  enhance: ({ app, router, siteData }) => {
    app.use(ArcoVue);
  },
});
