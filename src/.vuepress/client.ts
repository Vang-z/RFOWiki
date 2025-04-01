import {defineClientConfig} from "@vuepress/client";
import {defineAsyncComponent} from "vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "vuepress-theme-hope/presets/bounce-icon.scss";


const FooterRunTime = defineAsyncComponent(() => import("./components/FooterRunTime.vue"));
const Navbar = defineAsyncComponent(() => import("./components/Navbar.vue"));
const Lead = defineAsyncComponent(() => import("./components/Lead.vue"));

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
    Lead,
  ],
  enhance: ({ app, router, siteData }) => {
    app.use(ArcoVue);
  },
});
