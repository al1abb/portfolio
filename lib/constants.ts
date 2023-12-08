// Data
export const WEB_DEV_START_DATE = new Date("2020-01-23");

// Nodemailer
export const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
export const NODEMAILER_PW = process.env.NODEMAILER_PW;

// Github
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Social links
export const GITHUB_LINK = "https://github.com/aliabb01";
export const TWITTER_LINK = "https://twitter.com/ali3abb";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/ali-abbasov/";

// Website URLs
export const WEBSITE_URL = process.env.SITE_URL;
export const BLOG_RSS_URL = `${WEBSITE_URL}/blog/rss.xml`;

// RSS
export const RSS_FEED_OPTIONS = {
    title: "Blog Posts | RSS Feed",
    description: "Blog posts of Ali Abbasov",
    id: WEBSITE_URL!,
    link: WEBSITE_URL,
    language: "en-us",
    favicon: `${WEBSITE_URL}/favicon.ico`,
    generator: "Feed for Node.js",
    copyright: `All rights reserved ${new Date().getFullYear()}, Ali Abbasov`,
    author: {
        name: "Ali Abbasov",
        link: `${WEBSITE_URL}/#contact`,
    },
};
