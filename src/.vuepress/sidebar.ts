import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/notice": [],
  "/event": [],
  "/walkthrough/": [
    {
      text: "副本攻略",
      icon: "gitlab",
      collapsible: true,
      children: [{text: "　洛兰", link: "dungeon-lorien"}]
    }
  ],
  "/screenshot": [],
  "/dungeon": [],
  "/monster": [],
  "/player": [],
  "/equipment": [],
});
