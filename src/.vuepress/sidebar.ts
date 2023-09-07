import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/notice": [],
  "/event": [],
  "/walkthrough/": [
    {
      text: "副本",
      icon: "dungeon",
      collapsible: true,
      children: [
        {text: "洛兰", icon: "/assets/images/ImagePacks2/sprite_monster/monsterface.img/0.png", link: "dungeon/lorien"},
      ]
    },
    {
      text: "怪物",
      icon: "skull",
      collapsible: true,
      children: [
        {text: "哥布林", icon: "/assets/images/ImagePacks2/sprite_monster/monsterface.img/0.png", link: "monster/goblin"},
      ]
    },
    {
      text: "角色",
      icon: "children",
      collapsible: true,
      children: [
        {text: "鬼剑士", icon: "/assets/images/ImagePacks2/sprite_item/iconmark_cn.img/5.png", link: "character/swardman"},
      ]
    },
    {
      text: "宠物",
      icon: "paw",
      collapsible: true,
      children: [
        {text: "迷你赛丽亚", link: "creature/65000"},
      ]
    },
    {
      text: "装备",
      icon: "gavel",
      collapsible: true,
      children: [
        {
          text: "武器",
          icon: " ",
          collapsible: true,
          children: [
            {
              text: "鬼剑士",
              icon: " ",
              collapsible: true,
              children: [
                {
                  text: "短剑",
                  icon: " ",
                  collapsible: true,
                  children: [
                    "equipment/weapon/swordman/ssword/sswd_damaged"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: "消耗品",
      icon: "flask-vial",
      collapsible: true,
      children: [
        {text: "野草莓", link: "stackable/food_strawberry"},
      ]
    },
    {
      text: "材料",
      icon: "microchip",
      collapsible: true,
      children: [
        {text: "碎布片", link: "material/piece_cotton"},
      ]
    },
    {
      text: "卡片",
      icon: "cannabis",
      collapsible: true,
      children: [{text: "青哥布林  卡片", link: "card/mcard_seagab"}]
    },
    {
      text: "其他",
      icon: "link",
      link: "other"
    },
  ],
  "/screenshot": [],
  "/dungeon": [],
  "/monster": [],
  "/player": [],
  "/equipment": [],
});
