"use client"
import styles from "./root.module.css"
import Image from "next/image"
import Xlogo from "../public/x-social-media-white-icon.svg"
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import bugspotLogo from "../public/bugspotLogo.png"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { useState } from "react"
import { Marquee } from "@/components/magicui/marquee"
import { div, h2 } from "motion/react-client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/projectCard/projectCard"
import { ProjectType } from "@/lib/types"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";


export default function RotPage() {

  const projectsList: ProjectType[] = [{
    name: "Bugspot",
    imageUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749742202/Gemini_Generated_Image_fe8y5bfe8y5bfe8y_1_gf7snv.jpg",
    description: "Collaborative team-builder social media with blogs community and in-built team builder for projects and events. Features markdown bloggins, most in-depth profile builder, projects showcase and collaborator and events team-builder.",
    liveLink: "https://bugspot.in",
    techStack: ["Next.js", "Typescript", "Auth js", "MongoDb", "Cloudinary"],
    work: "Solo work",
    status: "Active"
  }, {
    name: "IIC protal",
    imageUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749741925/Screenshot_2025-06-12_205508_rlcvtw.png",
    description: "Official registration and submission portal for IIC.\nFeatures 3 fully customisable portals and one general purpose form builder, profile editor and in-depth admin panel",
    liveLink: "https://hackurwayonlinesubmission.vercel.app",
    techStack: ["Next.js", "Typescript", "Auth js", "Mongodb", "Cloudinary"],
    work: "Solo work",
    status: "Active"
  }, {
    name: "SoloDev",
    imageUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749743470/Screenshot_2025-06-12_212044_y4jlyz.png",
    description: "One stop reference sheet website for developers who work on everything by themselves. With fully responsive layout to fit 2nd monitor",
    liveLink: "https://solo-dev.vercel.app",
    techStack: ["Next.js", "Supabase", "Typescript"],
    work: "Solo work",
    status: "Active"
  }, {
    name: "Nebula",
    imageUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749744678/Screenshot_2025-06-12_214101_suvhah.png",
    description: "Online document editor with friends system to share docs around.Features an in-built anonymous chat room",
    liveLink: "https://nebula0.vercel.app",
    techStack: ["Next.js", "Typescript", "Auth js", "Mongodb", "Supabase"],
    work: "Solo work",
    status: "Active"
  }]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 3));
  const [showMoreProject, setShowMoreProject] = useState("less");


  const techStack1 = [
    {
      name: "Next.js",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764539/nextjs_gyqxdo.png"
    },
    {
      name: "Cloudinary",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/cloudinary_jcjz1e.webp"
    },
    {
      name: "Auth.js",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/authjs_g9rfwm.webp"
    },
    {
      name: "PostgreSQL",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/psotgresql_ggzxtu.png"
    },
    {
      name: "Supabase",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/supabase_eban6b.png"
    }, {
      name: "shadCn",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765234/shadcn_xvjz01.png"
    }]
  const techStack2 = [{
    name: "React Native",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/react_fxopt7.png"
  }, {
    name: "Python",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/python_gtxoax.webp"
  }, {
    name: "MongoDB",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg"
  }, {
    name: "FastAPI",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/FastAPI_prcozs.png"
  }, {
    name: "Git",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764943/gitlogo_ozinof.png"
  }, {
    name: "Radix UI",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765176/radixui_nmbq9s.png"
  }
  ];


  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 140);
  });


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
          <motion.div
            style={{
              transition: "all 0.1s ease", zIndex: 10, maxWidth: 650,
              width: "100%", borderRadius: "0px 0px 10px 10px"
            }}
            animate={isScrolled ? "scrolled" : "normal"}
            variants={{
              normal: {
                position: "static",
              },
              scrolled: {
                top: 0,
                position: "fixed",
                height: 60,
                backdropFilter: "blur(10px)"
              }
            }}>
            <motion.div className="relative h-[100%] w-[100%]">

              <motion.img
                src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749725680/meeee_d5jlhm.jpg"
                alt="Animated image"
                initial={{
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  margin: "0px auto",
                  position: "static"
                }}
                animate={isScrolled ? "scrolled" : "normal"}
                variants={{
                  normal: {
                    height: 200,
                    width: 200,
                    borderRadius: 10,
                    // top: 0,
                    // left: 0,
                  },
                  scrolled: {
                    height: 40,
                    width: 40,
                    borderRadius: 50,
                    position: "absolute",
                    top: 10,
                    left: 10,
                  },
                }}

                whileHover={{
                  boxShadow: "0 0 30px 2px rgba(255, 255, 255, 0.5)"
                }}

                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  objectFit: "cover",
                  transition: "box-shadow 0.1s"
                }}
              />
            </motion.div>
          </motion.div>



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

            <Link href="https://github.com/abhraneeldhar7" target="_blank">
              <div className={styles.socialsItem}>
                <Github size={15} color="white" />
                <p>Github</p>
              </div>
            </Link>


            <Link href="https://bugspot.in/profile/101766837132725568508" target="_blank">
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

            <Link href="https://www.linkedin.com/in/abhraneeldhar/" target="_blank">
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
        {/* 
        <Button onClick={() => {
          if (currentTheme == "dark") {
            setCurrentTheme("light");
          }
          else {
            setCurrentTheme("dark")
          }
        }}>
          {currentTheme}
        </Button> */}



        <div className={styles.projectsSection}>
          <h1 className="text-[27px]">Proof of work</h1>

          <div className={styles.projectsHolder}>
            {projectDisplayList.map((project, index) => (
              <div key={index} className="flex flex-col gap-[10px]">

                <ProjectCard projectDetails={project} />
                {index < projectDisplayList.length - 1 &&
                  <div className="bg-[var(--fgColor)] h-[1px] w-[90%] mx-auto opacity-[0.4]"></div>}
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
            <Marquee pauseOnHover className="[--duration:35s]">
              {techStack1.map((tech, index) => (
                <div key={index} className={styles.techStackItem}>
                  <Image alt="" src={tech.iconUrl} height={20} width={20} unoptimized />
                  <p>{tech.name}</p>
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:35s]">
              {techStack2.map((tech, index) => (
                <div key={index} className={styles.techStackItem}>
                  <Image alt="" src={tech.iconUrl} height={20} width={20} unoptimized />
                  <p>{tech.name}</p>
                </div>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bgColor)]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bgColor)]"></div>
          </div>

        </div>

        <div className={styles.pageFooter}>
          <p className={`opacity-[0.7] text-[17px] flex items-center gap-[5px] ${styles.resumeBtn}`}>resume <ArrowUpRight size={16} /></p>
          <p className="text-[15px] text-center opacity-[0.7] max-w-[580px]">One shared pursuit shall tell you the difference between a regular contributor and the guy who goes to war with the market to put your vision ahead of competitors.</p>
        </div>
      </div>
    </div >)
}