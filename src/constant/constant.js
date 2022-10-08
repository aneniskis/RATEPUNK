import invite from "../assests/Invite Friends Img.svg";
import collect from "../assests/Collect coins img.svg";
import voucher from "../assests/Get voucher img.svg";
import chrome from "../assests/Chrome Icon.svg";
import apple from "../assests/Apple Store Icon.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export const navLink = [
  { title: "Chrome Extension" },
  { title: "Price Comparison" },
  { title: "Blog" },
];

export const steps = [
  {
    step: "STEP 1",
    title: "INVITE FRIENDS",
    description: "Refer friends with your unique referral link.",
    image: invite,
  },
  {
    step: "STEP 2",
    title: "COLLECT COINS",
    description:
      "Get 1 coin for each friend that installs our extension using your referral link.",
    image: collect,
  },
  {
    step: "STEP 3",
    title: "GET VOUCHER",
    description:
      "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    image: voucher,
  },
];

export const stores = [
  {
    store: "chrome web store",
    image: chrome,
    content: "available in the",
    link: "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk]",
  },
  {
    store: "apple app store",
    image: apple,
    content: "available in the",
    link: "https://apps.apple.com/app/ratepunk/id1607823726",
  },
];

export const quickLinks = [
  {
    title: "Price Comparison",
  },
  {
    title: "Chrome Extension",
  },
  {
    title: "How It Works",
  },
  {
    title: "Ratepunk Blog",
  },
  {
    title: "Privacy Policy",
  },
];

const styles = {
  height: "32px",
  width: "32px",
  color: "#4eb3e3",
};

export const listOfSocials = [
  {
    image: <FaInstagramSquare style={styles} />,
    link: "https://www.instagram.com/ratepunk/",
  },
  {
    image: <FaFacebookSquare style={styles} />,
    link: "https://www.facebook.com/r8punk/",
  },
  {
    image: <FaLinkedin style={styles} />,
    link: "https://www.linkedin.com/company/ratepunk/",
  },
  {
    image: <FaTwitterSquare style={styles} />,
    link: "https://mobile.twitter.com/rate_punk",
  },
  {
    image: <SiTiktok style={styles} />,
    link: "https://www.tiktok.com/@ratepunk",
  },
];
