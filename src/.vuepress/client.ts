import {defineClientConfig} from "@vuepress/client";
import {defineAsyncComponent} from "vue";


const FooterRunTime = defineAsyncComponent(() => import("./components/FooterRunTime.vue"));

export default defineClientConfig({
  setup() {
    if (typeof document !== 'undefined') {
      document.oncontextmenu = function (_) {
        return false;
      };
    }
  },
  rootComponents: [
    FooterRunTime,
  ],
});
