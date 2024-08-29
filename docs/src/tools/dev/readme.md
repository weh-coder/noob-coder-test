---
title: 开发必备工具
shortTitle: 开发必备工具
description: 开发必备工具
category:
  - 开发必备工具
tag:
  - 开发必备工具
head:
  - - meta
    - name: keywords
      content: 开发必备工具

tech:
  - title: CSDN
    desc: 中国专业IT社区CSDN
    logo: /assets/image/csdn.gif
    link: http://www.csdn.net/

  - title: LeetCode
    desc: 为全球程序员提供IT技术职业化提升的平台
    logo: /assets/image/leetcode.jpg
    link: https://leetcode.cn/

  - title: 掘金
    desc: 掘金是一个帮助开发者成长的社区，是一个面向互联网技术人的内容分享平台
    logo: /assets/image/juejin.svg
    link: https://juejin.im

  - title: 博客园
    desc: 开发者的网上家园
    logo: /assets/image/cnblog.gif
    link: https://www.cnblogs.com/

code:
  - title: GitHub
    desc: GitHub是一个面向开源及私有软件项目的托管平台
    logo: /assets/image/github1.png
    link: https://github.com/

  - title: Gitee
    desc: 开源中国旗下的代码托管平台
    logo: /assets/image/gitee.png
    link: https://gitee.com/

  - title: GitCode
    desc: GitCode是面向全球开发者的开源社区
    logo: /assets/image/gitcode.png
    link: https://gitcode.net/

  - title: Coding
    desc: 一站式 DevOps，提升研发效能
    logo: /assets/image/codingnet.png
    link: https://coding.net/

---

## :bamboo:技术社区
<VPCard
  v-for="item in $frontmatter.tech"
  :key="item.link"
  v-bind="item"
/>

## :monkey:代码托管
<VPCard
  v-for="item in $frontmatter.code"
  :key="item.link"
  v-bind="item"
/>

## :rabbit:工具合集


## :dog2:常用搜索



<Share colorful />

<BiliBili bvid="BV1394y1o7iL" page="2"/>

<PDF url="//theme-hope-assets.vuejs.press/files/sample.pdf" />