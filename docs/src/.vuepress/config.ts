import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
  // HTML 目录
  dest: "./dist",
  lang: "zh-CN",
  //首页标题
  title: "菜鸟程序猿",
  // 描述
  description: "这个网站是一个专门分享个人学习技术知识的全方位学习平台，涵盖了前端、后端、数据结构与算法、数据库、中间件、开发工具、Git、Linux、Docker、读书笔记和开源项目等多个领域。",
  theme,
  // pwa 建议设置为 false
  shouldPrefetch: false,
  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "weh-coder(小魏)" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端、后端、数据库、中间件、二次元、Vue、React、Java、Go、C++、Python、面试题、八股文、MySQL、Redis、Docker、Linux等",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "script",{},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5230ac143650bf5eb3c14f3fb9b1d3ec";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
    [
      "script",{},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?59aa453e7e706422c636c079fc1cb031";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
    [
      "link",
      {
        rel: "stylesheet",
        // 自定义阿里图标链接
        href: "//at.alicdn.com/t/c/font_4661411_lyf5l7f5qd.css",
      },
    ],
  ]
});

