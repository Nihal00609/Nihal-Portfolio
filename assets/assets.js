import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Doc Appointment',
        description: 'Booking medical appointments',
        bgImage: '/work-1.png',
        link: "https://doctor-appointment-system-b9wj.onrender.com/"
    },
    {
        title: 'SocioPedia',
        description: 'Social Media Web app',
        bgImage: '/work-2.png',
        link: "https://sociopedia-d9ku.onrender.com/"
    },
    {
        title: 'Open-AI-clone',
        description: 'Mimic ChatGPT features',
        bgImage: '/work-3.png',
        link: "https://openai-gpt-clone.onrender.com/"
    },
    {
        title: 'Strasha',
        description: 'Stock market analysis application',
        bgImage: '/work-4.png',
        link: "https://github.com/Nihal00609/Strasha-stock-market-analysis"
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Kognicloud (Staples)', description: 'Worked with Staples Advantage to resolve development tickets and production issues',description2: 'Architected and built a full-featured Stock Market Analysis Platform using React.js,', period: 'Septemper 2024 - Present' },
    { icon: assets.mobile_icon, title: 'Rays IT and Design world', description: 'Developed and deployed large-scale, data-driven web applications from concept to production using the MERN stack.',description2: ' Collaborated cross-functionally with frontend, backend, and QA teams to enhance system reliability and user experience.', period: 'July 2023 - August 2024' },
    { icon: assets.ui_icon, title: 'Zensar Technologies (Techademy)', description: ' Completed an intensive MERN stack training, gaining proficiency in both frontend and backend technologies.',description2: 'Built dynamic UI with HTML, CSS, jQuery, and React.js ensuring responsive, mobile-first designs.', period: 'June 2022 - March 2023' },
    // { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React.Js, Next.Js, Node.Js, Express, Tailwind, MongoDB' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech from NIT Agartala' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Work Experience', description: 'More than 2 years of experience working extensively in MERN stack.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];