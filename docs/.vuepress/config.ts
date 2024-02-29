import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import {hopeTheme} from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "",
  description: "",

  theme: hopeTheme({
    sidebar: "structure",

    navbar: [

      {
        text: "首页",
        link: "",
        icon: "circle-question",
      },
      {
        text: "文档",
        link: "/pages/",
        icon: "circle-question",
      },
    ],
    plugins: {
       searchPro: {
         indexContent: true,
       },
    },
  }),


  // 和 PWA 一起启用
  // shouldPrefetch: false,

});
