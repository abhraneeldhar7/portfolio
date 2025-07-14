![Live Screenshot](./public/assets/landingpage-9179.png)
# Abhraneel Dhar's Portfolio

## 🗂️ Description

This repository contains the source code for Abhraneel Dhar's portfolio website, built using Next.js, TypeScript, and Tailwind CSS. The website showcases Abhraneel's projects, blogs, and resume, and is designed to be interactive and visually appealing.

The portfolio website is intended for developers and individuals who want to showcase their projects and skills. It provides a clean and organized way to display projects, blogs, and other relevant information.

The website is built with a focus on reusability, maintainability, and scalability, making it easy to update and extend in the future.

The portfolio website is divided into several sections, including a hero section, social media links, bio, projects showcase, tech stack, photos, and articles. Each section is interactive, with features like hover effects, animations, and dynamic content loading.

This project is for anyone who wants to learn more about Abhraneel Dhar's work and experience.

## ✨ Key Features

### **Core Features**

* Personal portfolio website with various sections (hero, social media links, bio, projects showcase, tech stack, photos, and articles)
* Interactive globe and animated content
* Theme switcher with light and dark modes
* Projects showcase with customizable project cards
* Blog feature with API route to fetch blog data

### **Components**

* **ProjectCard**: A component that displays project details, including image, description, tech stack, and links.
* **DefaultBlogCard**: A component that displays blog details, including image, text content, and links.
* **Marquee**: A component that displays a scrolling text or image.
* Reusable UI components (Button, AlertDialog, Marquee, Globe)
* Customizable project cards and blog cards

### **Pages**

* **Home**: The main page of the portfolio website, showcasing Abhraneel's projects, blogs, and resume.
* **Resume**: A page that redirects to a resume PDF file.

### **API Routes**

* **getBlogs**: An API route for fetching blogs from a specific endpoint.

## 🗂️ Folder Structure

```mermaid
graph TD;
src-->app;
app-->api;
app-->components;
app-->layout;
app-->page;
app-->resume;
components-->blogs;
components-->magicui;
components-->projectCard;
components-->ui;
src-->lib;
lib-->utils.ts;
lib-->types.ts;
src-->api-->getBlogs-->route.ts;
graph TD;
 src-->app;
 app-->layout.tsx;
 app-->page.tsx;
 app-->providers.tsx;
 app-->resume-->page.tsx;
 src-->components;
 components-->projectCard-->projectCard.tsx;
 components-->blogs-->blogCards.tsx;
 src-->lib;
 lib-->utils.ts;
 lib-->types.ts;
 src-->api-->getBlogs-->route.ts;
```

## 🛠️ Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* React
* ESLint
* PostCSS

## ⚙️ Setup Instructions

* Git clone the repository: `https://github.com/abhraneeldhar7/portfolio.git`
* Install dependencies: `npm install` or `yarn install`
* Start the development server: `npm run dev` or `yarn dev`
* Build the project: `npm run build` or `yarn build`
* Lint the code: `npm run lint` or `yarn lint`
* Open the website in a browser: `http://localhost:3000`