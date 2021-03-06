import apolloGraphqlIcon from "/public/static/icons/apollo-graphql-1.svg";
import bashIcon from "/public/static/icons/bash-1.svg";
import cloudinaryIcon from "/public/static/icons/cloudinary-1.svg";
import expoIcon from "/public/static/icons/Expo-logo.svg";
import expressIcon from "/public/static/icons/express.svg";
import fastifyIcon from "/public/static/icons/fastify.svg";
import graphqlIcon from "/public/static/icons/graphql.svg";
import herokuIcon from "/public/static/icons/heroku-1.svg";
import cppIcon from "/public/static/icons/icons8-c++.svg";
import cIcon from "/public/static/icons/icons8-c-programming.svg";
import cssIcon from "/public/static/icons/icons8-css3.svg";
import gitIcon from "/public/static/icons/icons8-git.svg";
import githubIcon from "/public/static/icons/icons8-github.svg";
import htmlIcon from "/public/static/icons/icons8-html-5.svg";
import javaIcon from "/public/static/icons/icons8-java.svg";
import jsIcon from "/public/static/icons/icons8-javascript.svg";
import mysqlIcon from "/public/static/icons/icons8-mysql-logo.svg";
import nodejsIcon from "/public/static/icons/icons8-nodejs.svg";
import pyIcon from "/public/static/icons/icons8-python.svg";
import reactIcon from "/public/static/icons/icons8-react.svg";
import sassIcon from "/public/static/icons/icons8-sass.svg";
import netlifyIcon from "/public/static/icons/netlify.svg";
import nextIcon from "/public/static/icons/next-js.svg";
import phpIcon from "/public/static/icons/PHP-01.svg";
import rnIcon from "/public/static/icons/react-native-1.svg";
import reactQueryIcon from "/public/static/icons/rect-query.svg";
import styledCompIcon from "/public/static/icons/styled-components.svg";
import vercelIcon from "/public/static/icons/vercel.svg";
import vsCodeIcon from "/public/static/icons/visual-studio-code-1.svg";
import mongoDbIcon from "/public/static/icons/mongodb-ar21.svg";
//
// images

// { id: 1, icon: apolloGraphqlIcon },
// { id: 2, icon: bashIcon },
// { id: 3, icon: cloudinaryIcon },
// { id: 4, icon: expoIcon },
// { id: 5, icon: expressIcon },
// { id: 6, icon: fastifyIcon },
// { id: 7, icon: graphqlIcon },
// { id: 8, icon: herokuIcon },
// { id: 9, icon: mongoDbIcon },
// { id: 10, icon: vsCodeIcon },
// { id: 11, icon: vercelIcon },
// { id: 12, icon: styledCompIcon },
// { id: 13, icon: reactQueryIcon },
// { id: 14, icon: rnIcon },
// { id: 15, icon: phpIcon },
// { id: 16, icon: nextIcon },
// { id: 17, icon: netlifyIcon },
// { id: 18, icon: sassIcon },
// { id: 19, icon: reactIcon },
// { id: 20, icon: pyIcon },
// { id: 21, icon: nodejsIcon },
// { id:22, icon: mysqlIcon },
// { id: 23, icon: jsIcon },
// { id: 24, icon: javaIcon },
// { id: 25, icon: htmlIcon },
// { id: 26, icon: githubIcon },
// { id: 27, icon: gitIcon },
// { id: 28, icon: cssIcon },
// { id: 29, icon: cppIcon },

import college from "/public/static/projects/college.png";
import corona from "/public/static/projects/corona.png";
import api from "/public/static/projects/api.png";
import twitter from "/public/static/projects/twitter.png";

export const projectsData = [
  {
    id: 1,
    name: "Twitter clone",
    image: twitter,
    githubLink: "https://github.com/SiddheshDabholkar/Twitter-clone",
    liveLink: "https://tweeetr.netlify.app/",
    description:
      "Minimalistic clone of twitter with features like tweet,retweet,like,unlike,delete,update profile and etc.The main goal was to understand usage of graphql with MERN stack",
    technologies: [
      { id: 1, icon: apolloGraphqlIcon },
      { id: 2, icon: cloudinaryIcon },
      { id: 3, icon: graphqlIcon },
      { id: 4, icon: herokuIcon },
      { id: 5, icon: netlifyIcon },
      { id: 6, icon: cssIcon },
      { id: 7, icon: styledCompIcon },
      { id: 8, icon: nodejsIcon },
      { id: 9, icon: gitIcon },
      { id: 10, icon: mongoDbIcon },
      { id: 11, icon: reactIcon },
      { id: 12, icon: htmlIcon },
    ],
  },
  {
    id: 2,
    name: "College management",
    image: college,
    githubLink: "https://github.com/collegeProjectzz/college-management",
    liveLink: "",
    description:
      "College mmanagement system where faculty an enter and update marks and student can see there performance through intearctive charts",
    technologies: [
      { id: 10, icon: vsCodeIcon },
      { id: 15, icon: phpIcon },
      { id: 19, icon: reactIcon },
      { id: 22, icon: mysqlIcon },
      { id: 23, icon: jsIcon },
      { id: 25, icon: htmlIcon },
      { id: 26, icon: githubIcon },
      { id: 27, icon: gitIcon },
      { id: 28, icon: cssIcon },
    ],
  },
  {
    id: 3,
    name: "Covid stats and news",
    image: corona,
    githubLink: "https://github.com/SiddheshDabholkar/Corona",
    liveLink: "https://corona-ind.vercel.app/",
    description:
      "progressive Web app which shows covid statistics of india and news related to covid-19",
    technologies: [
      { id: 10, icon: vsCodeIcon },
      { id: 11, icon: vercelIcon },
      { id: 12, icon: styledCompIcon },
      { id: 16, icon: nextIcon },
      { id: 23, icon: jsIcon },
      { id: 25, icon: htmlIcon },
      { id: 26, icon: githubIcon },
      { id: 27, icon: gitIcon },
      { id: 28, icon: cssIcon },
    ],
  },
  {
    id: 4,
    name: "Api website",
    image: api,
    githubLink: "https://github.com/SiddheshDabholkar/dummy_api_website",
    liveLink: "https://dummy-api-website.vercel.app/",
    description:
      "Website built to understand usage of styled-components and lottie-web",
    technologies: [
      { id: 10, icon: vsCodeIcon },
      { id: 11, icon: vercelIcon },
      { id: 12, icon: styledCompIcon },
      { id: 16, icon: nextIcon },
      { id: 23, icon: jsIcon },
      { id: 25, icon: htmlIcon },
      { id: 26, icon: githubIcon },
      { id: 27, icon: gitIcon },
      { id: 28, icon: cssIcon },
    ],
  },
];
