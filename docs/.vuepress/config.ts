import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import {hopeTheme} from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "学习笔记",
  description: "",

  theme: hopeTheme({
    sidebar: "structure"
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,

});
