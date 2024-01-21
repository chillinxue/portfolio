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
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FChatbotPoster.png?alt=media&token=5717c32c-f0ae-4b1f-8555-6ba1096565cc";
const hanabiWebsite =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FHanabiWebsite.png?alt=media&token=88f1d2d2-7c72-4a36-a6ba-7eebcd606079";
const stylish =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2F%E6%88%AA%E5%9C%96%202024-01-07%20%E4%B8%8B%E5%8D%887.54.14.png?alt=media&token=0481f94c-01ab-48bf-9395-29c82c96ceb9";
const loveVR =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2Fimg_1_1704627459337.jpg?alt=media&token=3e3adae8-cd67-4b8f-b987-be0f6ef51ca9";
const mrtNews =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2Fvideonews.png?alt=media&token=f2d1bf5f-f7ce-4268-8979-8f4dc7221080";
const schoolZoneSidewalk =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2Fschool%20zone%20sidewalk.png?alt=media&token=6179cf16-e49f-448a-8687-7fc5a5f511e8";
const photoOnTaipei =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FphotographonTaipei.png?alt=media&token=1546b622-198d-426f-8499-2af4fa274e1c";
const suriHello =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2FSuriHello.png?alt=media&token=418db0fe-be47-4ef4-9796-51c38c3ab9a9";
const again =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2Fagain.png?alt=media&token=40fc948a-79d8-4100-adb4-c8945c2b4890";
const youthClub =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2Fyouthclub.png?alt=media&token=56084079-622d-4e97-b2a5-77f6fd9c1e11";
const filmFestival =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-d723c.appspot.com/o/presentation%20-%20poster%2Ffilmfestival.jpeg?alt=media&token=2e255578-556b-4d58-a33e-dfd5e054255b";
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
        route: "/sections/page-sections/linebankchatbot",
      },
      {
        image: `${hanabiWebsite}`,
        name: "Travel Planning Website - HANABI",
        count: 14,
        route: "/sections/page-sections/hanabi",
      },
      {
        image: `${stylish}`,
        name: "E-commerce Website - STYLiSH",
        count: 8,
        route: "/sections/navigation/stylish",
      },
      {
        image: `${loveVR}`,
        name: "VR Game: Love 360",
        count: 1,
        route: "/sections/navigation/vr360",
      },
    ],
  },
  {
    title: "Media Productions",
    description: "As a student of communication college, I spent 4 years on the field of media.",
    items: [
      {
        image: `${mrtNews}`,
        name: "Report - Taipei MRT 'Family Areas'",
        count: 4,
        route: "https://www.peopo.org/news/295529",
      },
      {
        image: `${schoolZoneSidewalk}`,
        name: "Report - School Zone Sidewalk ",
        count: 2,
        route: "https://www.thenewslens.com/article/35185",
      },
      {
        image: `${photoOnTaipei}`,
        name: "Photo in 'TAIPEI PICTORIAL'",
        count: 3,
        route: "https://www.travel.taipei/zh-tw/pictorial/article/8032",
      },
      {
        image: `${suriHello}`,
        name: "Short Film - 'Suri,Hello'",
        count: 3,
        route: "https://www.youtube.com/watch?v=s8eglU-xx8M",
      },
      {
        image: `${again}`,
        name: "Short Film - 'Again'",
        count: 3,
        route: "https://www.youtube.com/watch?v=ih-1w4Lezzk",
      },
    ],
  },
  {
    title: "Activities",
    description: "The experiences of holding activities.",
    items: [
      {
        image: `${filmFestival}`,
        name: "Film Festival: 'You Are Not Alone in Depression'",
        count: 6,
        pro: false,
      },
      {
        image: `${youthClub}`,
        name: "NCCU Chinan Youth Club",
        count: 8,
        pro: false,
      },
      // {
      //   image: `${hanabiWebsite}/forms.jpg`,
      //   name: "Forms",
      //   count: 3,
      //   route: "/sections/input-areas/forms",
      // },
      // {
      //   image: `${hanabiWebsite}/inputs.jpg`,
      //   name: "Inputs",
      //   count: 6,
      //   route: "/sections/input-areas/inputs",
      // },
    ],
  },
  // {
  //   title: "Attention Catchers",
  //   description: "20+ Fully coded components that popup from different places of the screen",
  //   items: [
  //     {
  //       image: `${hanabiWebsite}/alerts.jpg`,
  //       name: "Alerts",
  //       count: 4,
  //       route: "/sections/attention-catchers/alerts",
  //     },
  //     {
  //       image: `${hanabiWebsite}/toasts.jpg`,
  //       name: "Notifications",
  //       count: 3,
  //       pro: true,
  //     },
  //     {
  //       image: `${hanabiWebsite}/popovers.jpg`,
  //       name: "Tooltips & Popovers",
  //       count: 2,
  //       route: "/sections/attention-catchers/tooltips-popovers",
  //     },
  //     {
  //       image: `${hanabiWebsite}/modals.jpg`,
  //       name: "Modals",
  //       count: 5,
  //       route: "/sections/attention-catchers/modals",
  //     },
  //   ],
  // },
  // {
  //   title: "Elements",
  //   description: "80+ carefully crafted small elements that come with multiple colors and shapes",
  //   items: [
  //     {
  //       image: `${hanabiWebsite}/buttons.jpg`,
  //       name: "Buttons",
  //       count: 6,
  //       route: "/sections/elements/buttons",
  //     },
  //     {
  //       image: `${hanabiWebsite}/avatars.jpg`,
  //       name: "Avatars",
  //       count: 2,
  //       route: "/sections/elements/avatars",
  //     },
  //     {
  //       image: `${hanabiWebsite}/dropdowns.jpg`,
  //       name: "Dropdowns",
  //       count: 2,
  //       route: "/sections/elements/dropdowns",
  //     },
  //     {
  //       image: `${hanabiWebsite}/switch.jpg`,
  //       name: "Toggles",
  //       count: 2,
  //       route: "/sections/elements/toggles",
  //     },
  //     {
  //       image: `${hanabiWebsite}/social-buttons.jpg`,
  //       name: "Social Buttons",
  //       count: 2,
  //       pro: true,
  //     },
  //     {
  //       image: `${hanabiWebsite}/breadcrumbs.jpg`,
  //       name: "Breadcrumbs",
  //       count: 1,
  //       route: "/sections/elements/breadcrumbs",
  //     },
  //     {
  //       image: `${hanabiWebsite}/badges.jpg`,
  //       name: "Badges",
  //       count: 3,
  //       route: "/sections/elements/badges",
  //     },
  //     {
  //       image: `${hanabiWebsite}/progress.jpg`,
  //       name: "Progress Bars",
  //       count: 4,
  //       route: "/sections/elements/progress-bars",
  //     },
  //     {
  //       image: `${hanabiWebsite}/tables.jpg`,
  //       name: "Tables",
  //       count: 3,
  //       pro: true,
  //     },
  //     {
  //       image: `${hanabiWebsite}/typography.jpg`,
  //       name: "Typography",
  //       count: 2,
  //       route: "/sections/elements/typography",
  //     },
  //   ],
  // },
];
