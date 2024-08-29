import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://noob.itweh.cn",
  // 网站图标
  author: {
    // 作者标签：***
    name: "weh-coder(小魏)",
    url: "/about/",
  },
  // 阿里图标的前缀
  iconPrefix: "iconfont icon-",
  // 主页导航图标
  logo: "/noob-logo.png",
  // Git 仓库和编辑链接
  repo: "https://github.com/weh-coder/noob-coder",
  repoLabel: "GitHub",
  docsDir: "docs/src/",
  // 以前的默认仓库分支名(master/main)，方便提交 pr 和 issue
  docsBranch: "main",
  breadcrumb: false,
  // 全屏按钮
  fullscreen: true,
  // 在深色模式，浅色模式和自动之间切换 (默认)
  darkmode: "toggle",
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,
  // 页脚支持
  footer: 'MIT Licensed | 粤 | <a href="https://noob.itweh.cn" target="_blank">菜鸟程序猿</a>',
  displayFooter: true,
  // 加密
  encrypt: {
    config: {
      // 这只会加密 config/page.html
    },
  },
  // 提示文字
  encryptLocales: {
    placeholder: "微信搜‘weh程序猿’",
    /**
     * Passwrod error hint
     */
    errorHint: "不要急，慢慢来！！！",
  },
  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  //文章更新时间
  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  blog: {
    // 个人介绍页地址
    intro: "/about/",
    sidebarDisplay: "mobile",
    // 博主头像
    avatar: "/wehcoder.jpg",
    // 座右铭
    description:"欲绝奇环，有可胜出然！",
    medias: {
      Github: "https://github.com/weh-coder",
      Gitee: "https://gitee.com/weh_coder",
      BiliBili:"https://space.bilibili.com/1542981948",
      QQ:"/assets/image/QQ.jpg",
      Wechat:"/assets/image/weixin.jpg",
      WechatMP:"/assets/image/weixin-01.jpg",
      Weibo:"https://weibo.com/u/6585148773",
    },
  },
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    // Giscus评论
    comment: {
      provider: "Giscus",
      repo: "weh-coder/technology-giscus",
      repoId: "R_kgDOMgOzXQ",
      category: "Announcements",
      categoryId: "DIC_kwDOMgOzXc4ChcqD",
    },

// 内置组件可用组件:
    components: {
      components: ["Badge", "VPCard","SiteInfo","Share","BiliBili","PDF"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
    // 本地搜索
    searchPro: {
      indexContent: true,
      hotReload: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `Tag: $content`,
        },
      ],
    },
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      // logo
      favicon: "https://noob-station.oss-cn-shanghai.aliyuncs.com/cainiao.png",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
    watermark:{
      enabled:true,
      watermarkOptions:{
        width: 200,
        height: 200,
        content:"weh-coder(小魏)版权所有"
      }
    },
    //可以禁止站点的复制或者选择
    copyright:{
      license: "MIT",
      global:true,
      disableSelection:true,
      disableCopy:true
    }
  }
});
