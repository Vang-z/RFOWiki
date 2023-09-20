import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {redirectPlugin} from "vuepress-plugin-redirect";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "rfo.wiki",
  theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
      hotKeys: [{key: "f", ctrl: true}],
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: "分类: $content",
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: "标签: $content",
        },
      ],
    }),
    redirectPlugin({
      config: {},
    }),
  ],
});
