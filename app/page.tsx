"use client"
import styles from "./root.module.css"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, DownloadIcon, RedoIcon, Send, UndoIcon } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ProjectCardContent from "@/components/projectCard/cardContent"
import { ProjectType } from "@/lib/types"
import { useRouter } from "next/navigation"
import { PillIndicator } from "@/components/ui/shadcn-io/pill"


export default function RotPage() {
  const router = useRouter()
  const tabDivRef = useRef<HTMLDivElement | null>(null);
  const [showTab, setShowTab] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowTab(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    if (tabDivRef.current) {
      observer.observe(tabDivRef.current);
    }

    return () => {
      if (tabDivRef.current) observer.unobserve(tabDivRef.current);
    };
  }, []);


  const projectsArray: ProjectType[] = [{
    projectId: "123",
    title: "Gitfull",
    description: "One click readme maker for github repositories using smart parsing techniques.",
    techStack: ["NextJs", "Typescript", "MongoDb", "Groq"],
    thumbnailUrl: "/projectThumbnails/gitfull.png",
    gitRepoUrl: "https://github.com/abhraneeldhar7/gitfull",
    liveLink: "https://gitfull.vercel.app",
    blogLink: null,

    storyFragments: [{
      index: 0,
      title: "Problem",
      textContent: "Developers often spend valuable time reading through repositories to understand code structure, purpose, and dependencies before contributing or reusing projects. Writing or updating a README is equally tedious and often neglected, leaving repositories undocumented and hard to navigate. This slows down onboarding, collaboration, and open-source contributions, especially when projects grow large or lack clear documentation.",
      cardColor: "#ff2a15"
    },
    {
      index: 0,
      title: "Approach",
      textContent: "GitFull scans the entire repository, files, folders, and code comments using intelligent parsing and summarization techniques. It identifies project goals, architecture, and dependencies, then organizes this information into structured summaries. With one click, it automatically generates or updates a detailed, human-readable README that reflects the project's true functionality and intent.",
      cardColor: "#ff7700"
    },
    {
      index: 0,
      title: "Solution",
      textContent: "GitFull eliminates manual documentation efforts by automating README creation through repository analysis and AI summarization. It saves developers hours of repetitive work while improving clarity and consistency across projects. The result is an instantly up-to-date, professional-quality README that enhances collaboration, onboarding, and open-source accessibility all with just a single click.",
      cardColor: "#00d9ff"
    }],
  },
  {
    projectId: "124",
    title: "LazyPing",
    description: "Open-source tool that keeps free-tier servers active, preventing from cold starts during crucial time.",
    techStack: ["NextJs", "Typescript", "Supabase", "GitHub Actions"],
    thumbnailUrl: "/projectThumbnails/lazyping.png",
    gitRepoUrl: "https://github.com/abhraneeldhar7/gitfull",
    liveLink: "https://github.com/abhraneeldhar7/lazy-ping",
    blogLink: null,

    storyFragments: [{
      index: 0,
      title: "Problem",
      textContent: "Free-tier servers often enter sleep mode after periods of inactivity, leading to frustrating cold starts that slow down apps or APIs when they're needed most. Developers lose valuable seconds waiting for servers to spin back up, especially during demos, client requests, or production-like tests. This unpredictability disrupts workflows and makes free-tier hosting unreliable for time-sensitive operations.",
      cardColor: "#ff2a15"
    },
    {
      index: 0,
      title: "Approach",
      textContent: "LazyPing continuously pings and monitors your free-tier servers at smart intervals to prevent them from idling out. It uses lightweight, customizable requests designed to keep instances awake without straining server resources. With an open-source architecture, developers can easily configure, extend, or self-host it to match their deployment needs and platform restrictions.",
      cardColor: "#ff7700"
    },
    {
      index: 0,
      title: "Solution",
      textContent: "LazyPing ensures your free-tier apps stay instantly responsive by eliminating cold starts altogether. Whether you're showcasing a project, running background jobs, or maintaining uptime for APIs, LazyPing keeps your servers warm and ready. Simple, transparent, and fully open-source — it's the effortless way to maintain performance consistency across free-tier deployments.",
      cardColor: "#00d9ff"
    }],
  },
  {
    projectId: "125",
    title: "IIC forms",
    description: "Official submissions portal for inter college hackathon.",
    techStack: ["Cloudinary", "MongoDb", "NextJs", "Typescript"],
    thumbnailUrl: "/projectThumbnails/iicforms.png",
    gitRepoUrl: null,
    liveLink: "https://hackurwayonlinesubmission.vercel.app",
    blogLink: null,

    storyFragments: [{
      index: 0,
      title: "Challenge",
      textContent: "Managing hundreds of hackathon submissions from multiple colleges can get chaotic. Organizers face inconsistent formats, missing files, and communication gaps, while participants struggle to confirm if their entries were received correctly. This lack of structure often delays judging and hurts the overall event experience.",
      cardColor: "#e05921"
    },
    {
      index: 0,
      title: "Innovation",
      textContent: "With the portal, hackathons become faster, fairer, and more transparent. Teams stay informed, organizers save hours of manual sorting, and judges can focus purely on innovation. It transforms the submission phase from a messy process into a smooth, reliable experience for every participant and institution involved.",
      cardColor: "#dd6185"
    },
    {
      index: 0,
      title: "Solution",
      textContent: "LazyPing ensures your free-tier apps stay instantly responsive by eliminating cold starts altogether. Whether you're showcasing a project, running background jobs, or maintaining uptime for APIs, LazyPing keeps your servers warm and ready. Simple, transparent, and fully open-source — it's the effortless way to maintain performance consistency across free-tier deployments.",
      cardColor: "#837cc0"
    }],
  }
  ]


  const ReachOutComponent = () => {
    return (
      <div className="flex-1 flex md:justify-end justify-center">

        <div className="flex gap-[10px] h-fit">
          <div className="rounded-[10px] h-[full] w-[200px] bg-muted/50 border-[2px] flex flex-col">
            <Link className="text-[14px] font-[300] pb-[5px] pt-[7px] leading-[1em] px-[14px] border-b-[2px] opacity-[0.8] flex justify-between pr-[8px]" href="/AbhraneelDhar_resume.pdf" target="_blank">
              Resume
              <ArrowUpRight size={14} />
            </Link>
            <div className="py-[10px] px-[15px] flex gap-[10px] items-center justify-between">
              <Link href="/AbhraneelDhar_resume.pdf" target="_blank">
                <p className="font-[350] font-[Sans3] text-[16px]">resume.pdf</p>
              </Link>
              <DownloadIcon size={18} className="opacity-[0.9] transition-all hover:translate-y-[3px]" onClick={(e) => {
                e.stopPropagation();
                const link = document.createElement("a");
                link.href = "/AbhraneelDhar_resume.pdf";
                link.download = "AbhraneelDhar_resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }} />
            </div>
          </div>

          <div className="flex flex-col gap-[10px] w-[140px]">
            <div className="flex items-center gap-[10px] text-[14px] border font-[400] bg-muted w-full py-[8px] px-[12px] rounded-[15px] leading-[1em]">
              <PillIndicator pulse variant="success" />
              <p>Open to work</p>
            </div>
            <Button className="w-full">
              <Send />  Get in touch
            </Button>
          </div>
        </div>

      </div >
    )
  }

  return (
    <>
      <div className={cn(
        "z-[-1]",
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(var(--foreground)_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(var(--foreground)_1px,transparent_1px)]",
        "[opacity:0.25]",
        "transition-colors duration-400"
      )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--background))] dark:bg-background transition-colors duration-400"></div>
      <div className="w-full py-[50px]">


        <div className={`transition-all h-[60px] flex justify-end items-center w-full fixed left-0 backdrop-blur-[40px] ${showTab ? "top-[0px]" : "top-[-65px]"}  z-[5]`}>
          <AnimatedThemeToggler className="m-[20px] rounded-[50%] h-[40px] w-[40px]" />
        </div>


        <div>
          <Image unoptimized src="/dotsHand.png" height={250} width={400} className="object-contain w-full h-fit invert dark:invert-0 mb-[30px] md:hidden" alt="" />
        </div>


        <div className="flex md:flex-row flex-col md:gap-[20px] gap-[50px] max-w-[1100px] w-full mx-auto">

          <div className="md:px-[50px] px-[15px] flex-1 mx-auto">
            <div ref={tabDivRef} />
            <div className="flex md:gap-[25px] gap-[15px]">
              <Link href="/">
                <Image src="/pfp.jpeg" className={`rounded-[10px] z-[6] transition-all object-cover ${showTab ? "fixed top-[10px] left-[15px] rounded-[50%] h-[40px] w-[40px]" : "md:h-[140px] md:w-[140px] w-[110px] h-[110px]  border-[2px] border-foreground/20 p-[2px]"}`} alt="" height={100} width={100} unoptimized />
              </Link>

              <div>
                <h1 className="md:text-[35px] text-[25px] font-[600] font-[Poppins] leading-[1.]">Abhraneel Dhar</h1>
                <Link href="https://x.com/abhraneeldhar" target="_blank">
                  <p className="text-[15px] leading-[1.2em] opacity-[0.5]">@abhraneeldhar</p>
                </Link>
              </div>
            </div>



          </div>
          <div className="hidden md:flex flex-col">
            <ReachOutComponent />
          </div>

        </div>







        <div className="flex flex-col md:flex-row md:gap-[50px] gap-[20px] w-full md:px-[50px] px-[15px] mt-[50px]">
          <div className="flex-3">
            <div className="md:text-[22px] text-[19px] font-[Satoshi]">
              <p className="text-center font-[Sans3] font-[600] md:text-[32px] text-[25px]">I'm a <span className="">software engineer</span> building</p>
              <div className="max-w-[500px] mx-auto w-full">
                <div className="mt-[10px] flex gap-[15px] items-end">
                  <div className="py-[7px] px-[15px] dark:bg-[#f4f5f5] bg-[#262626] rounded-[12px] md:rounded-[14px] relative md:h-[50px] h-[40px] md:w-[120px] w-[100px] flex justify-center items-center">
                    <p className="text-[white] mix-blend-difference md:text-[24px] text-[18px] font-[500] z-[2] font-[Sans3]">
                      Websites
                    </p>
                    <Image src="/img3.png" className="absolute bottom-[0px] md:h-[80px] h-[60px] object-contain w-fit z-[1]" alt="" height={100} width={100} unoptimized />
                  </div>

                  <div className="flex items-center gap-[10px] md:text-[14px] text-[12px]">
                    <p className="md:text-[18px] text-[16px] opacity-[0.8]">with</p>
                    <div className="flex gap-[7px]">
                      <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                        <Image src="https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                        NextJs</div>

                      <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" className="object-contain h-[17px] w-[17px] rounded-[3px]" unoptimized alt="" height={40} width={40} />
                        Typescript</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-[15px] items-end md:text-[14px] text-[12px]">
                  <div className="flex items-center gap-[10px]">
                    <p className="md:text-[18px] text-[16px] opacity-[0.8]">and</p>
                    <div className="flex gap-[7px]">
                      <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                        <Image src="https://docs.flutter.dev/assets/images/flutter-logo-sharing.png" className="object-contain h-[16px] w-[20px]" unoptimized alt="" height={40} width={40} />
                        Flutter</div>

                      <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                        React Native</div>
                    </div>
                  </div>
                  <p className="md:text-[18px] text-[16px] opacity-[0.8]">for</p>
                  
                  <div className="overflow-hidden pt-[15px] rounded-[14px]">
                    <div className="py-[7px] px-[15px] dark:bg-[#f4f5f5] bg-[#262626] rounded-[14px] relative md:h-[50px] h-[40px] md:w-[100px] w-[70px] flex justify-center items-center">
                      <p className="md:text-[24px] text-[18px] font-[Sans3] font-[500] z-[2] pl-[20px] text-[white] mix-blend-difference">
                        Apps
                      </p>
                      <Image src="/img2.png" className="absolute bottom-[-6px] md:h-[70px] h-[60px] left-[-2px] object-contain w-fit z-[1]" alt="" height={100} width={100} unoptimized />
                    </div>
                  </div>


                </div>
              </div>
            </div>


            <h1 className="font-[Poppins] font-[500] text-[28px] mt-[50px]">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3  mt-[10px] gap-[15px]">
              {projectsArray.map((project, index) => (
                <div key={index} className="p-[5px] rounded-[10px] h-[320px] flex flex-col justify-between border-[1px] border-foreground/20 dark:bg-[#101010] bg-muted relative">
                  <Dialog >
                    <DialogTrigger asChild>
                      <div>
                        <ArrowUpRight size={16} className="absolute top-[8px] right-[8px] text-white mix-blend-difference" />
                        <div>
                          <Image src={project.thumbnailUrl} className="w-full rounded-[5px] h-[180px]" unoptimized alt="" height={100} width={200} />
                          <div className="px-[6px]">
                            <h1 className="text-[22px] leading-[1.1em] mt-[8px]">{project.title}</h1>
                            <p className="text-[14px] opacity-[0.8] font-[400] mt-[2px]">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogTitle className="hidden" />
                    <DialogDescription className="hidden" />
                    <DialogContent className="dark:bg-[#101010] bg-muted outline-none p-[5px]">
                      <ProjectCardContent initCurrentProjectDetails={project} />
                    </DialogContent>
                  </Dialog>

                  <div className="flex gap-[5px] justify-end">
                    <Button variant="outline" className="border-[1px] h-[37px]">View details</Button>
                    <Link href={project.liveLink || ""} target="_blank">
                      <Button onClick={(e) => {
                        e.stopPropagation();
                      }}>Visit <ArrowUpRight /></Button>
                    </Link>
                  </div>
                </div>
              ))}


            </div>
          </div>



          <div className="flex-1 flex flex-col">
            <h1 className="font-[Poppins] font-[500] text-[28px]">Skills</h1>
            <div className="mt-[10px] ml-[10px] relative">
              <div className="top-0 md:left-[-2px] left-[-3px] md:w-[2px] w-[3px] md:h-[88%] h-[87%] bg-foreground absolute"></div>

              <div className="flex">
                <div className="w-[20px]">
                  <UndoIcon className="rotate-[190deg] translate-x-[-5px]" />
                </div>                <div className="flex flex-col">
                  <h1 className="font-[Satoshi] text-[18px]">Front-end</h1>
                  <div className="flex gap-[10px] flex-wrap mt-[5px] md:text-[14px] text-[12px]">
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      NextJs</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      ReactJs</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" className="object-contain h-[17px] w-[17px] rounded-[3px]" unoptimized alt="" height={40} width={40} />
                      Typescript</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Tailwind</div>
                  </div>
                </div>
              </div>


              <div className="flex mt-[20px]">
                <div className="w-[20px]">
                  <UndoIcon className="rotate-[190deg] translate-x-[-5px]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-[Satoshi] text-[18px]">Back-end</h1>
                  <div className="flex gap-[10px] flex-wrap mt-[5px] md:text-[14px] text-[12px]">
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      FastAPI</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Redis</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp" className="object-contain h-[20px] w-[20px] bg-[black] rounded-[50%] p-[1px]" alt="" height={40} width={40} />
                      ExpressJs</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DATAg1AAZAA0" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Cloudinary</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Python</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" className="object-contain h-[17px] w-[17px] rounded-[3px]" unoptimized alt="" height={40} width={40} />
                      Typescript</div>

                  </div>
                </div>
              </div>


              <div className="flex mt-[20px]">
                <div className="w-[20px]">
                  <UndoIcon className="rotate-[190deg] translate-x-[-5px]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-[Satoshi] text-[18px]">Database</h1>
                  <div className="flex gap-[10px] flex-wrap mt-[5px] md:text-[14px] text-[12px]">
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Redis</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Postgress</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://firebase.google.com/static/images/products/icons/build_firestore.svg" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Firestore</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      MongoDb</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://logo.svgcdn.com/d/supabase-original-8x.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Supabase</div>
                  </div>
                </div>
              </div>


              <div className="flex mt-[20px]">
                <div className="w-[20px]">
                  <UndoIcon size={27} className="rotate-[185deg] translate-x-[-5px] translate-y-[-2px]" />
                </div>
                <div className="flex flex-col ml-[2px]">
                  <h1 className="font-[Satoshi] text-[18px]">Mobile</h1>
                  <div className="flex gap-[10px] flex-wrap mt-[5px] md:text-[14px] text-[12px]">
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://img.icons8.com/color/512/flutter.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      Flutter</div>
                    <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                      React Native</div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>

        {
          false && <>
            <div className={styles.photosSection}>
              <h1 className="text-[27px]">Photos</h1>

              <div className={styles.imgHolderHolder}>

                <div className={styles.photoHolder}>
                  <Image height={50} width={50} className="h-[fit-content] w-[100%] object-contain rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130834/photo_4_2025-06-28_22-37-54_p4yw42.jpg" alt="" unoptimized />

                  <div className="flex gap-[10px] h-[400px]">
                    <Image height={50} width={50} className="flex-1 h-[100%] object-cover rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130833/photo_12_2025-06-28_22-37-54_uqiygy.jpg" alt="" unoptimized />

                    <div className="flex flex-1 flex-col gap-[10px]">
                      <Image height={50} width={50} className="w-[100%] h-[50%] object-cover rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130834/photo_9_2025-06-28_22-37-54_uuchk4.jpg" alt="" unoptimized />
                      <Image height={50} width={50} className="w-[100%] h-[50%] object-cover rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130833/photo_5_2025-06-28_22-37-54_llb7jk.jpg" alt="" unoptimized />
                    </div>
                  </div>

                </div>
                <div className={styles.photoHolder}>
                  <Image height={50} width={50} className="h-[fit-content] w-[100%] object-contain rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130834/photo_3_2025-06-28_22-37-54_a6sbyo.jpg" alt="" unoptimized />

                  <div className="flex gap-[10px]">
                    <Image height={50} width={50} className="flex-1 object-cover object-center rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130833/photo_13_2025-06-28_22-37-54_adgtqn.jpg" alt="" unoptimized />
                    <Image height={50} width={50} className="flex-1 h-[100%] object-cover rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130835/photo_11_2025-06-28_22-37-54_qmieiu.jpg" alt="" unoptimized />
                  </div>
                  <Image height={50} width={50} className="h-[100%] w-[100%] object-cover rounded-[10px]" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1751130833/photo_2025-06-28_22-40-33_mrklgq.jpg" alt="" unoptimized />
                </div>
              </div>
            </div>
          </>
        }

        {/* <p className="text-[15px] text-center opacity-[0.7] max-w-[580px]">One shared pursuit shall tell you the difference between a regular contributor and the guy who goes to war with the market to put your vision ahead of competitors.</p> */}

      </div >
    </>)
}