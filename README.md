This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

本项目可以非常方便地部署到 Vercel 平台上，具体步骤如下：

1. 登录您的 Vercel 账号，点击 **Add New...** -> **Project**。
2. 在 **Import Git Repository** 列表中找到本项目的 GitHub 仓库（例如 `luoruofeng/DyslexiaPDFWEB`），点击 **Import**。
3. 进入配置页面，各项配置基本保持默认即可：
   - **Project Name**: 可以自定义，例如 `dyslexia-pdfweb`。
   - **Framework Preset**: 选择 `Next.js`。
   - **Root Directory**: 保持默认 `./`。
   - **Build and Output Settings**: 保持默认配置即可（构建命令 `npm run build`，输出目录默认）。
   - **Environment Variables**: 如果项目有需要的环境变量（如 API Key），可在此处展开并逐一添加。
4. 点击 **Deploy** 按钮，等待构建完成即可上线！

更多详细信息，请参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。
