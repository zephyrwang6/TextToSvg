import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "Text To SVG",
  description:
    "Generate SVG image in seconds.",
  url: "https://www.texttosvg.cc",
  ogImage: "https://www.texttosvg.cc/og.jpg",
  metadataBase: new URL("https://www.texttosvg.cc"),
  keywords: ["Text To SVG", "ChatGPT", "SVG", "AI"],
  authors: [
    {
      name: "kongge_zephyr",
      url: "https://x.com/zephyr_kongge",
    }
  ],
  creator: '@kongge_zephyr',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  links: {
    twitter: "https://x.com/zephyr_kongge",
    github: "https://github.com/zephyrwang6/TextToSvg",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
