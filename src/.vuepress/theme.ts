import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://rfo.wiki",
  author: {
    name: "Vang-z",
  },
  repo: "https://github.com/Vang-z/RFOWiki",
  iconAssets: "fontawesome",
  docsDir: "src",
  navbar,
  sidebar,
  footer: "<div style='display: flex; justify-content: center; align-items: center; font-size: 12px'>" +
    "POWERED BY&nbsp;" +
    "<a href='https://theme-hope.vuejs.press/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
    "<img style='width: 100%; height: 100%; 2023-12: 1px;' src='https://theme-hope-assets.vuejs.press/logo.svg' alt=''>" +
    "</a>" +
    "&nbsp;" +
    "<a href='https://vercel.com/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
    "<img style='width: 100%; height: 100%' src='/assets/images/vercel.png' alt=''>" +
    "</a>" +
    "&nbsp;&&nbsp;" +
    "<a href='https://waline.js.org/' target='_blank' style='display: flex; width: 18px; height: 18px;'>" +
    "<img style='width: 100%; height: 100%' src='https://waline.js.org/logo.png' alt=''>" +
    "</a>" +
    "</div>",
  copyright: "<div style='display: flex; justify-content: center; align-items: center; font-size: 12px'>" +
    "COPYRIGHT <div style='position: relative; font-family: Flexo, serif; 2023-12: 1px'>&nbsp;©&nbsp;</div>" +
    "2023 Vang-z. ALL RIGHTS RESERVED." +
    "</div>",
  displayFooter: true,
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  darkmode: "enable",
  themeColor: true,
  print: false,
  hotReload: true,
  plugins: {
    comment: {
      // @ts-ignore
      provider: "Waline",
      serverURL: "https://waline-drab-seven.vercel.app/",
      search: false,
      meta: ["nick", "mail"],
      requiredMeta: ["nick"],
      emoji: [
        "/assets/emoji/bmoji",
        "/assets/emoji/bilibili",
        "/assets/emoji/tieba",
        "/assets/emoji/alus",
        "/assets/emoji/soul-emoji",
      ]
    },
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      sub: true,
      sup: true,
      tabs: true,
      card: true,
    },
  },
});
