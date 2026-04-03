---
category: "Technology"
date: "2026-03-31 12:00"
title: "Vibe Coding 实战：用 Claude 快速迁移博客系统 + 改造健身数据展示页"
description: "闲来无事用 Claude Code “Vibe Coding” 两个小项目：把两年前的 Next.js 博客迁移到 Astro + Cloudflare Pages，以及基于 Running Page 项目打造个人健身数据展示系统。半小时一个，AI 真香。"
tags: ["CS", "Vibe Coding"]
---

最近闲着没事，试了试用 **Claude Code** 进行 “Vibe Coding”——就是用自然语言描述需求，让 AI 直接帮你把代码“vibe”出来。

### 项目一：博客系统从 Next.js + Vercel 迁移到 Astro + Cloudflare Pages

两年前我手写了一个个人博客，技术栈是 **Next.js + Vercel**。当时用着挺顺手，但后来看到不少博主都在从 Vercel 迁移走，纷纷转向 **Cloudflare Pages**。理由主要是：

- Cloudflare 的全球 CDN 性能更强、延迟更低；
- 免费额度更大，不容易因为流量或构建次数产生额外费用；
- 对静态站点特别友好，不强制依赖 Next.js 的服务端特性。

正好想尝试新框架，我就用 Claude Code “vibe” 了一下：把整个博客迁移到 **Astro**（一个专注于内容站点的现代框架） + **Cloudflare Pages**。

整个过程非常丝滑，从描述需求到生成代码、调试、部署完成，只花了**半个多小时**。Astro 的“零 JavaScript”理念让站点加载速度飞起，Cloudflare Pages 的部署也简单到极致。

AI 的进步真的太快了，以前可能要花一两天折腾的东西，现在“聊天式”编码就能快速搞定。

### 项目二：把健身数据改造成类似 Running Page 的展示系统

2019 年我爱上跑步，后来机缘巧合发现了 yihong0618 大佬的开源项目 **[Running Page](https://github.com/yihong0618/running_page)**，用来漂亮地展示跑步数据（我的数据：[xmchxup.github.io/running_page](https://xmchxup.github.io/running_page/)）。

近半年我逐渐把重心转向健身房训练，跑步频率大幅减少。于是我突发奇想：能不能把健身数据也做成类似 Running Page 的可视化展示页呢？

基于原项目，我又用 **Claude Code** “vibe” 了一版。第一版从零到可用的时间同样是**30 分钟左右**。目前健身数据展示页在这里：

→ [健身数据展示页](https://xmchxup.github.io/workout_page/)
→ 整理出来开源了 [Workout Page](https://github.com/XmchxUp/workout_page)

效果还不错，把杠铃、器械、组数、体重等数据以类似跑步页面的风格呈现出来，数据可视化一目了然。

### 总结与感受

两次 Vibe Coding 的经历让我深刻感受到：**AI 编码工具已经从“辅助”变成了“主力”**。你只需要清晰描述“想要什么效果、用什么技术栈”，Claude Code 就能快速生成可运行的代码框架，后续微调也非常高效。

- **博客迁移**：更轻量、更快、更省钱的 Astro + Cloudflare 组合，适合内容型站点。
- **健身页改造**：小改开源项目，就能快速复用到新场景，数据展示变得更有趣。
