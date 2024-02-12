import {navbar} from "vuepress-theme-hope";

export default navbar([
  "/",
  {text: "公告", icon: "bell", link: "/notice"},
  {text: "活动", icon: "hourglass-half", link: "/event"},
  {
    text: "游戏攻略", icon: "scroll", children: [
      {text: "副本", icon: "dungeon",  link: "/walkthrough/dungeon"},
      {text: "怪物", icon: "skull",  link: "/walkthrough/monster"},
      {text: "角色", icon: "children",  link: "/walkthrough/character"},
      {text: "宠物", icon: "paw",  link: "/walkthrough/creature"},
      {text: "装备", icon: "gavel",  link: "/walkthrough/equipment"},
      {text: "消耗品", icon: "flask-vial",  link: "/walkthrough/stackable"},
      {text: "材料", icon: "microchip",  link: "/walkthrough/material"},
      {text: "卡片", icon: "cannabis",  link: "/walkthrough/card"},
      {text: "其他", icon: "link",  link: "/walkthrough/other"},
    ]
  },
  {text: "剧情回顾", icon: "puzzle-piece", link: "/screenshot"},
  {text: "副本排行", icon: "dungeon", link: "/dungeon"},
  {text: "怪物排行", icon: "skull", link: "/monster"},
  {text: "玩家排行", icon: "medal", link: "/player"},
  {text: "装备排行", icon: "crown", link: "/equipment"},
  {text: "注册账号", icon: "keyboard", link: "https://register.rfo.wiki"},
  {text: "开始冒险", icon: "download", link: "https://rfo.wiki/notice/top/884383f2-ea9f-42cf-8be2-6e570103269f.html"},
]);
