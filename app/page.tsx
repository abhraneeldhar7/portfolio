"use client"
import styles from "./root.module.css"
import Image from "next/image"
import Xlogo from "../public/x-social-media-white-icon.svg"
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import bugspotLogo from "../public/bugspotLogo.png"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { useState } from "react"
import { Marquee } from "@/components/magicui/marquee"
import { div, h2 } from "motion/react-client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function RotPage() {

  const projectsList = [{
    name: "Bugspot",
    imgUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749742202/Gemini_Generated_Image_fe8y5bfe8y5bfe8y_1_gf7snv.jpg",
    description: "Collaborative team-builder social media with blogs community and in-built team builder for projects and events. Features markdown bloggins, most in-depth profile builder, projects showcase and collaborator and events team-builder.",
    url: "https://bugspot.vercel.app"
  }, {
    name: "IIC protal",
    imgUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749741925/Screenshot_2025-06-12_205508_rlcvtw.png",
    description: "Official registration and submission portal for IIC.\nFeatures 3 fully customisable portals and one general purpose form builder, profile editor and in-depth admin panel",
    url: "https://hackurwayonlinesubmission.vercel.app"
  }, {
    name: "SoloDev",
    imgUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749743470/Screenshot_2025-06-12_212044_y4jlyz.png",
    description: "One stop reference sheet website for developers who work on everything by themselves. With fully responsive layout to fit 2nd monitor",
    url: "https://solo-dev.vercel.app"
  }, {
    name: "Nebula",
    imgUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749744678/Screenshot_2025-06-12_214101_suvhah.png",
    description: "Online document editor with friends system to share docs around.Features an in-built anonymous chat room",
    url: "https://nebula0.vercel.app"
  }]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 3));
  const [showMoreProject, setShowMoreProject] = useState("less");


  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];


  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme();



  return (
    <div className={styles.main}>
      <div className={cn(
        "z-[-1]",
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
        "[opacity:0.25]"
      )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bgColor)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[var(--bgColor)]"></div>



      <div className={styles.detailsHolder}>
        <div className={styles.heroSection}>
          <div className={styles.profileImageContainer}>
            <Image height={40} width={40} alt="" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749725680/meeee_d5jlhm.jpg" className={styles.profilePicBlurImage} unoptimized />
            <Link href="https://www.instagram.com/abhraneeldhar/" target="_blank">
              <Image height={40} width={40} alt="" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749725680/meeee_d5jlhm.jpg" className={styles.profilePic} unoptimized />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-[2px]">
            <h1>Abhraneel Dhar</h1>
            <p className={styles.SWEpara}>Software Engineer</p>
          </div>

          <div className={styles.socialsDiv}>
            <Link href="https://x.com/abhraneeldhar" target="_blank">
              <div className={styles.socialsItem}>
                <Image height={15} width={15} alt="" src={Xlogo} unoptimized />
                <p>X app</p>
              </div>
            </Link>

            <Link href="github.com/abhraneeldhar7" target="_blank">
              <div className={styles.socialsItem}>
                <Github size={15} color="white" />
                <p>Github</p>
              </div>
            </Link>


            <Link href="https://bugspot.vercel.app/profile/101766837132725568508" target="_blank">
              <div className={styles.socialsItem}>
                <Image alt="" src={bugspotLogo} unoptimized />
                <p>Bugspot</p>
              </div>
            </Link>

            <Link href="mailto:abhraneledhar@gmail.com?subject=Hello%20Abhraneel%20Dhar" target="_blank">
              <div className={styles.socialsItem}>
                <Mail size={15} color="white" />
                <p>Mail</p>
              </div>
            </Link>

            <Link href="linkedin.com/in/abhraneeldhar" target="_blank">
              <div className={styles.socialsItem}>
                <Linkedin size={15} color="white" />
                <p>LinkedIn</p>
              </div>
            </Link>
          </div>
        </div>


        <div className={styles.bio}>
          <p>Always have been facinated by computers of all sizes and now have the luxury to work with</p>
          <div className="flex flex-wrap justify-center gap-[10px] w-[100%] my-[0.5em]">
            <span>Web2</span> <span>Mobile Apps</span> <span>Micro controllers</span>
          </div>
        </div>

        <Button onClick={() => {
          if (currentTheme == "dark") {
            setCurrentTheme("light");
          }
          else {
            setCurrentTheme("dark")
          }
        }}>
          {currentTheme}
        </Button>


        <div className={styles.statusDiv}>
          <div className={styles.learningDiv}>
            <Image alt="" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749750359/React_Native_Logo_gskkfe.png" className={styles.lilLogo} height={40} width={40} />
            <div>
              <h2>Learning</h2>
              <p>React Native</p>
            </div>
          </div>
          <div className={styles.learningDiv}>
            <Image alt="" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749751267/FastAPI_wpfgdm.png" className={styles.lilLogo} height={40} width={40} />
            <div>
              <h2>Learning</h2>
              <p>Fast API</p>
            </div>
          </div>

        </div>


        <div className={styles.projectsSection}>
          <h1 className="text-[27px]">Proof of work</h1>

          <div className={styles.projectsHolder}>
            {projectDisplayList.map((project, index) => (
              <div key={index} className="flex flex-col gap-[10px]">
                <div className={styles.projectItem}>
                  <Image alt="" src={project.imgUrl} height={150} width={300} unoptimized />
                  <p>{project.description}</p>
                </div>
                {index < projectDisplayList.length - 1 &&
                  // <div className={styles.seperateDiv}></div>
                  <div className="bg-[var(--fgColor)] h-[1px] w-[90%] mx-auto opacity-[0.4]"></div>
                  // <div></div>
                }
              </div>
            ))}
            <div onClick={() => {
              if (showMoreProject == "less") {
                setProjectDisplayList(projectsList);
                setShowMoreProject("more");
              }
              else {
                setProjectDisplayList(projectsList.slice(0, 3));
                setShowMoreProject("less");
              }
            }} className={styles.showMore}>
              {showMoreProject == "less" && <>
                Show more <ChevronRight size={20} />
              </>}
              {showMoreProject == "more" && <>
                <ChevronLeft size={20} />Show less
              </>}
            </div>
          </div>

        </div>


        <div className={styles.techStack}>
          <h1 className="text-[27px]">Daily Tool-Box</h1>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {reviews.map((review, index) => (
                <h2 key={index}>{review.name}</h2>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bgColor)]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bgColor)]"></div>
          </div>

        </div>
      </div>
    </div>)
}