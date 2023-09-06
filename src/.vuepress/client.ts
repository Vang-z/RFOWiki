import {defineClientConfig} from "@vuepress/client";

export default defineClientConfig({
  setup() {
    if (typeof document !== 'undefined') {
      document.oncontextmenu = function (_) {
        return false;
      };
    }
  },
});
