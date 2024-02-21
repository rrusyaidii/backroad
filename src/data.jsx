import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  {
    id: 1,
    text: "home",
    href: "#",
  },
  {
    id: 2,
    text: "about",
    href: "#about",
  },
  {
    id: 3,
    text: "services",
    href: "#services",
  },
  {
    id: 4,
    text: "tours",
    href: "#tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    name: "Tibet Adventure",
    img: tour1,
    date: "august 26th, 2020",
    location: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    name: "best of java",
    img: tour2,
    date: "october 1th, 2020",
    location: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    name: "amazing thailand",
    img: tour3,
    date: "december 16th, 2020",
    location: "thailand",
    days: 9,
    price: 1200,
  },
  {
    id: 4,
    name: "kenya safari",
    img: tour4,
    date: "february 19th, 2021",
    location: "kenya",
    days: 14,
    price: 2500,
  },
  {
    id: 5,
    name: "grand canyon",
    img: tour5,
    date: "april 5th, 2021",
    location: "usa",
    days: 3,
    price: 800,
  },
  {
    id: 6,
    name: "majestic alps",
    img: tour6,
    date: "june 10th, 2021",
    location: "switzerland",
    days: 5,
    price: 1500,
  },
];
