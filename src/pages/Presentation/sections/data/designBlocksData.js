/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const lineBankChatbot =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FLINE%20Bank%20Chatbot.png?alt=media&token=9d567812-8f41-4cf0-becf-4c330de79658";
const hanabiWebsite =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FHanabiWebsite.png?alt=media&token=88f1d2d2-7c72-4a36-a6ba-7eebcd606079";

export default [
  {
    title: "Software Products",
    description:
      "The software projects I have independently developed or collaboratively worked on.",
    items: [
      {
        image: `${lineBankChatbot}`,
        name: "LINE Bank - Banking Chatbot",
        count: 10,
        route: "https://line.me/R/ti/p/@linebanktw#~",
      },
      {
        image: `${hanabiWebsite}`,
        name: "Travel Planning Website - HANABI",
        count: 14,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${hanabiWebsite}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        route: "/sections/page-sections/features",
      },
      {
        image: `${hanabiWebsite}/faq.jpg`,
        name: "FAQ",
        count: 1,
        pro: true,
      },
    ],
  },
  {
    title: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${hanabiWebsite}/navbars.jpg`,
        name: "Navbars",
        count: 4,
        route: "/sections/navigation/navbars",
      },
      {
        image: `${hanabiWebsite}/nav-tabs.jpg`,
        name: "Nav Tabs",
        count: 2,
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: `${hanabiWebsite}/pagination.jpg`,
        name: "Pagination",
        count: 3,
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "Input Areas",
    description: "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${hanabiWebsite}/newsletters.jpg`,
        name: "Newsletters",
        count: 6,
        pro: true,
      },
      {
        image: `${hanabiWebsite}/contact-sections.jpg`,
        name: "Contact Sections",
        count: 8,
        pro: true,
      },
      {
        image: `${hanabiWebsite}/forms.jpg`,
        name: "Forms",
        count: 3,
        route: "/sections/input-areas/forms",
      },
      {
        image: `${hanabiWebsite}/inputs.jpg`,
        name: "Inputs",
        count: 6,
        route: "/sections/input-areas/inputs",
      },
    ],
  },
  {
    title: "Attention Catchers",
    description: "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: `${hanabiWebsite}/alerts.jpg`,
        name: "Alerts",
        count: 4,
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${hanabiWebsite}/toasts.jpg`,
        name: "Notifications",
        count: 3,
        pro: true,
      },
      {
        image: `${hanabiWebsite}/popovers.jpg`,
        name: "Tooltips & Popovers",
        count: 2,
        route: "/sections/attention-catchers/tooltips-popovers",
      },
      {
        image: `${hanabiWebsite}/modals.jpg`,
        name: "Modals",
        count: 5,
        route: "/sections/attention-catchers/modals",
      },
    ],
  },
  {
    title: "Elements",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${hanabiWebsite}/buttons.jpg`,
        name: "Buttons",
        count: 6,
        route: "/sections/elements/buttons",
      },
      {
        image: `${hanabiWebsite}/avatars.jpg`,
        name: "Avatars",
        count: 2,
        route: "/sections/elements/avatars",
      },
      {
        image: `${hanabiWebsite}/dropdowns.jpg`,
        name: "Dropdowns",
        count: 2,
        route: "/sections/elements/dropdowns",
      },
      {
        image: `${hanabiWebsite}/switch.jpg`,
        name: "Toggles",
        count: 2,
        route: "/sections/elements/toggles",
      },
      {
        image: `${hanabiWebsite}/social-buttons.jpg`,
        name: "Social Buttons",
        count: 2,
        pro: true,
      },
      {
        image: `${hanabiWebsite}/breadcrumbs.jpg`,
        name: "Breadcrumbs",
        count: 1,
        route: "/sections/elements/breadcrumbs",
      },
      {
        image: `${hanabiWebsite}/badges.jpg`,
        name: "Badges",
        count: 3,
        route: "/sections/elements/badges",
      },
      {
        image: `${hanabiWebsite}/progress.jpg`,
        name: "Progress Bars",
        count: 4,
        route: "/sections/elements/progress-bars",
      },
      {
        image: `${hanabiWebsite}/tables.jpg`,
        name: "Tables",
        count: 3,
        pro: true,
      },
      {
        image: `${hanabiWebsite}/typography.jpg`,
        name: "Typography",
        count: 2,
        route: "/sections/elements/typography",
      },
    ],
  },
];
