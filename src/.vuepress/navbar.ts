import {navbar} from "vuepress-theme-hope";

export default navbar([
  "/",
  {text: "公告", icon: "notice", link: "/notice"},
  {text: "活动", icon: "launch", link: "/event"},
  {
    text: "游戏攻略", icon: "plugin", children: [
      {text: "副本攻略", children: ["/walkthrough/dungeon-lorien"]},
    ]
  },
  {
    text: "剧情回顾", icon: "pic", children: [
      "/screenshot",
      {text: "第一章 - 邂逅", link: "/screenshot#第一章-邂逅"},
    ]
  },
  {text: "副本排行", icon: "number", link: "/dungeon"},
  {text: "怪物排行", icon: "autumn", link: "/monster"},
  {text: "玩家排行", icon: "selection", link: "/player"},
  {text: "装备排行", icon: "workingDirectory", link: "/equipment"},
  {text: "开始冒险", link: "https://download.rfo.wiki"},
  {text: "注册账号", link: "https://register.rfo.wiki"},
]);
