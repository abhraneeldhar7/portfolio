import styles from "./root.module.css"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, DownloadIcon, Send, UndoIcon } from "lucide-react"
import { ProjectType } from "@/lib/types"
import { PillIndicator } from "@/components/ui/shadcn-io/pill"
import ProjectCard from "@/components/projectCard/projectCard"
import { NumberTicker } from "@/components/ui/number-ticker"
import GitHubCalendar from "react-github-calendar"
import MailboxComponent from "@/components/mailBox/mailbox"
import CardAnimComponent from "@/components/cardsAnimationComponent/cardsAnimationComponent"
import ProfileImageComp from "@/components/profileImage/profileImage"
import GithubCalendarCustom from "@/components/githubCalendar/githubCalendar"
import { ReachOutComponent } from "@/components/reachoutComp/reachoutComp"

export default function Ro0tPage() {



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
  // const [showAllProjects, setShowAllProjects] = useState(false);


  const SkillsComponent = () => {
    const skillsArray = {
      frontEnd: [
        { img: "https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default", name: "NextJs" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png", name: "ReactJs" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png", name: "TypeScript" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png", name: "Tailwind" }
      ],
      backEnd: [
        { img: "https://cdn.worldvectorlogo.com/logos/fastapi.svg", name: "FastAPI" },
        { img: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png", name: "Redis" },
        { img: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp", name: "ExpressJs" },
        { img: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DATAg1AAZAA0", name: "Cloudinary" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", name: "Python" }],
      database: [
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png", name: "Postgress" },
        { img: "https://firebase.google.com/static/images/products/icons/build_firestore.svg", name: "Firestore" },
        { img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", name: "MongoDB" },
      ],
      mobile: [
        { img: "https://img.icons8.com/color/512/flutter.png", name: "Flutter" },
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", name: "React Native" }
      ]
    }
    return (
      <div className="flex-1 flex flex-col">
        <h1 className="font-[500] text-[24px]">Skillset</h1>
        <div className="mt-[5px] ml-[8px] flex flex-col gap-[20px]">


          <div className="flex gap-[2px]">
            <div className="">
              <UndoIcon size={20} className="rotate-[190deg] translate-x-[-5px] opacity-[0.7]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px]">Front-end</h1>
              <div className="flex gap-[10px] flex-wrap mt-[5px]">
                {skillsArray.frontEnd.map((stack, index) => (
                  <div className="bg-[#303030] px-[5px] py-[4px] rounded-[5px] flex items-center gap-[6px] leading-[1em] text-[white] border text-[12px]" key={index}>
                    <Image src={stack.img} className="object-contain h-[17px] w-[17px]" unoptimized alt="" height={40} width={40} />
                    {stack.name}
                  </div>
                ))}
              </div>
            </div>
          </div>



          <div className="flex gap-[2px]">
            <div className="">
              <UndoIcon size={20} className="rotate-[190deg] translate-x-[-5px] opacity-[0.7]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px]">Back-end</h1>
              <div className="flex gap-[10px] flex-wrap mt-[5px]">
                {skillsArray.backEnd.map((stack, index) => (
                  <div className="bg-[#303030] px-[6px] py-[4px] rounded-[5px] flex items-center gap-[6px] leading-[1em] text-[white] border text-[12px]" key={index}>
                    <Image src={stack.img} className="object-contain h-[17px] w-[17px]" unoptimized alt="" height={40} width={40} />
                    {stack.name}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="flex gap-[2px]">
            <div className="">
              <UndoIcon size={20} className="rotate-[190deg] translate-x-[-5px] opacity-[0.7]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px]">Mobile</h1>
              <div className="flex gap-[10px] flex-wrap mt-[5px]">
                {skillsArray.mobile.map((stack, index) => (
                  <div className="bg-[#303030] px-[6px] py-[4px] rounded-[5px] flex items-center gap-[6px] leading-[1em] text-[white] border text-[12px]" key={index}>
                    <Image src={stack.img} className="object-contain h-[17px] w-[17px]" unoptimized alt="" height={40} width={40} />
                    {stack.name}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="flex gap-[2px]">
            <div className="">
              <UndoIcon size={20} className="rotate-[190deg] translate-x-[-5px] opacity-[0.7]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px]">Database</h1>
              <div className="flex gap-[10px] flex-wrap mt-[5px]">
                {skillsArray.database.map((stack, index) => (
                  <div className="bg-[#303030] px-[6px] py-[4px] rounded-[5px] flex items-center gap-[6px] leading-[1em] text-[white] border text-[12px]" key={index}>
                    <Image src={stack.img} className="object-contain h-[17px] w-[17px]" unoptimized alt="" height={40} width={40} />
                    {stack.name}
                  </div>
                ))}
              </div>
            </div>
          </div>








        </div>
      </div>
    )
  }




  const DotsPatter = () => {
    return (
      <>
        <div className={cn(
          "z-[-1]",
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--foreground)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(var(--foreground)_1px,transparent_1px)]",
          "[opacity:0.1]",
          "transition-colors duration-400"
        )}
        />
        <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--background))] dark:bg-background transition-colors duration-400"></div>
      </>
    )
  }

  return (
    <div className="overflow-hidden relative" id="me">

      <Image src="/f22.png" alt="" height={100} width={100} className="absolute top-[50%] translate-y-[-50%] left-[-350px] hidden md:block object-contain w-[600px] h-full dark:invert z-[-1] dark:opacity-[0.5]" unoptimized />
      <Image src="/f22.png" alt="" height={100} width={100} className="absolute top-[50%] translate-y-[-50%] right-[-350px] hidden md:block object-contain w-[600px] h-full dark:invert z-[-1] dark:opacity-[0.5]" unoptimized />

      <div className="relative">
        <div className="z-2 top-0 left-0 h-full w-full absolute" />
        <Image unoptimized src="/dotsHand.png" height={250} width={400} className="object-contain w-full h-fit invert dark:invert-0 mb-[30px] md:hidden" alt="" />
      </div>


      <div className="max-w-[650px] w-full mx-auto md:border md:border-b-0 md:px-[25px] mt-[40px] relative md:rounded-tl-[40px] md:rounded-tr-[40px] pt-[40px]">

        <DotsPatter />

        <div className="mx-auto w-full pb-[25px] px-[15px] md:pb-0 relative">

          <div className="flex md:gap-[25px] gap-[15px]">

            <ProfileImageComp />

            <div>
              <h1 className="md:text-[35px] text-[30px] font-[440] leading-[1em]">Abhraneel Dhar</h1>
              <Link href="https://x.com/veryNeel" target="_blank">
              </Link>
              <div className="mt-[10px] flex justify-center h-[100px]">
                <CardAnimComponent />
              </div>
            </div>

          </div>





          <div className="md:text-[22px] text-[19px] mt-[55px] font-[450]">

            <div className="flex gap-[15px] items-end">
              <div className="shadow-lg rounded-[10px] md:h-[50px] h-[40px] w-[110px] relative">
                <div className="absolute bottom-0 pt-[25px] overflow-hidden rounded-[10px]">
                  <div className="py-[7px] px-[15px] bg-[#f4f5f5] rounded-[10px] relative md:h-[50px] h-[40px] w-[110px] flex justify-center items-center">
                    <div className="absolute h-full flex justify-center w-full overflow-hidden">
                      <div className="md:translate-y-[35px] translate-y-[27px] md:w-[110px] w-[100px] md:h-[50px] h-[40px] rounded-[50%] bg-[#6217f7] blur-[6px] dark:blur-[10px]" />
                    </div>
                    <p className="text-[white] mix-blend-difference md:text-[24px] text-[20px] font-[450] z-[2]">
                      Websites
                    </p>
                    <Image src="/img3.png" className="absolute bottom-[-2px] md:h-[80px] h-[60px] object-contain w-fit z-[1]" alt="" height={100} width={100} unoptimized priority />
                  </div>
                </div>
              </div>




              <div className="flex items-center gap-[10px] md:text-[14px] text-[12px]">
                <p className="md:text-[18px] text-[16px] opacity-[0.8]">with</p>
                <div className="flex gap-[7px]">

                  <div className="dark:bg-[#130a0d] bg-[#f7eef8] px-[9px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] border font-[440] shadow-md h-[32px]">
                    <Image src="https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                    NextJs</div>

                  <div className="dark:bg-[#130a0d] bg-[#f7eef8] px-[9px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] border font-[440] shadow-md h-[32px]">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" className="object-contain h-[17px] w-[17px] rounded-[3px]" unoptimized alt="" height={40} width={40} />
                    Typescript</div>
                </div>
              </div>
            </div>


            {/* bottom */}
            <div className="flex justify-end gap-[15px] items-center md:text-[14px] text-[12px] mt-[20px] md:mt-[10px]">
              <div className="flex items-center gap-[10px]">
                <p className="md:text-[17px] text-[16px] opacity-[0.8]">and</p>
                <div className="flex gap-[7px]">

                  <div className="dark:bg-[#130a0d] bg-[#f7eef8] px-[9px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] border font-[440] shadow-md h-[32px]">
                    <Image src="https://docs.flutter.dev/assets/images/flutter-logo-sharing.png" className="object-contain h-[14px] w-[14px]" unoptimized alt="" height={40} width={40} />
                    Flutter
                  </div>

                  <div className="dark:bg-[#130a0d] bg-[#f7eef8] px-[10px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] border font-[440] shadow-md h-[32px]">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                    React Native</div>
                </div>

                <p className="md:text-[17px] text-[16px] opacity-[0.7]">for</p>

              </div>

              <div className="shadow-lg rounded-[10px] md:h-[50px] h-[40px]  md:w-[100px] w-[85px] relative">
                <div className="absolute bottom-0 overflow-hidden pt-[15px] rounded-[10px]">
                  <div className="py-[7px] px-[15px] bg-[#f4f5f5] rounded-[10px] relative md:h-[50px] h-[40px] md:w-[100px] w-[85px] flex justify-center items-center">
                    <div className="absolute h-full flex justify-center w-full overflow-hidden rounded-[10px]">
                      <div className="translate-y-[-26px] w-[140px] h-[40px] rounded-[50%] bg-[#6217f7] blur-[5px] dark:blur-[10px]" />
                    </div>
                    <p className="md:text-[24px] text-[20px]  font-[450] z-[2] pl-[20px] text-[white] mix-blend-difference">
                      Apps
                    </p>
                    <Image src="/img2.png" className="absolute bottom-[-6px] md:h-[70px] h-[60px] md:left-[-2px] left-[-4px] object-contain w-fit z-[1]" alt="" height={100} width={100} unoptimized priority />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <GithubCalendarCustom />

          <div className="relative mt-[50px]">
            <Image className="object-contain h-full max-w-[400px] mx-auto dark:invert dark:opacity-[0.6] w-full" height={100} width={100} unoptimized alt="" src="/batman.png" />
            <div className="w-full z-[2] h-[60px] bg-gradient-to-t from-background absolute bottom-[-2px] to-transparent"></div>

            <ReachOutComponent className="absolute z-[3] top-[70%] left-[50%] translate-x-[-50%]" />

          </div>



          {/* skills n shi */}
          <div className="md:px-[50px] px-[15px] md:mt-[80px] flex flex-col md:flex-row gap-[60px]">


            <div className="flex-1 flex flex-col md:items-end">
              <div className="flex flex-col items-end md:w-fit w-full">





                <div className="w-full mt-[25px]">
                </div>

                <div className="flex w-full mt-[20px] gap-[5px]">
                  <div className="aspect-square flex-1 rounded-[10px] border-[1px] border-foreground/20 flex items-center justify-center dark:bg-muted/40 bg-muted transition-all duration-250 ease-in-out hover:translate-y-[-5px] active:translate-y-[5px] md:active:translate-y-[0px]">
                    <Link className="p-[30%]" href="https://x.com/veryNeel" target="_blank">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" className="dark:invert object-contain" unoptimized alt="" height={50} width={50} />
                    </Link>
                  </div>

                  <div className="aspect-square flex-1 rounded-[10px] border-[1px] border-foreground/20 flex items-center justify-center dark:bg-[black] bg-[white] overflow-hidden transition-all duration-250 ease-in-out hover:translate-y-[-5px] active:translate-y-[5px] md:active:translate-y-[0px]">
                    <Link className="flex-1 h-full w-full relative overflow-hidden m-[10%]" href="mailto:abhraneeldhar@gmail.com" target="_blank">
                      <Image src="https://i.pinimg.com/474x/32/5a/4b/325a4bd7b5041b4455e9a0b64c92190d.jpg" className="grayscale object-contain absolute top-0 right-0 left-0 bottom-0 w-full h-full invert dark:invert-0" unoptimized alt="" height={50} width={50} />
                    </Link>
                  </div>

                  <div className="aspect-square flex-1 rounded-[10px] border-[1px] border-foreground/20 flex items-center justify-center dark:bg-muted/40 bg-muted overflow-hidden transition-all duration-250 ease-in-out hover:translate-y-[-5px] active:translate-y-[5px] md:active:translate-y-[0px]">
                    <Link className="flex-1 h-full w-full relative overflow-hidden" href="https://peerlist.io/abhraneeldhar" target="_blank">
                      <Image src="https://dqy38fnwh4fqs.cloudfront.net/company/COMHQ7BA9GLL7K8683MNBGDOG66PBN/logo-1695017827473.webp" className="grayscale object-contain absolute top-0 right-0 left-0 bottom-0 w-full h-full" unoptimized alt="" height={50} width={50} />
                    </Link>
                  </div>

                  <div className="aspect-square flex-1 rounded-[10px] border-[1px] border-foreground/20 flex items-center justify-center dark:bg-muted/40 bg-muted transition-all duration-250 ease-in-out hover:translate-y-[-5px] active:translate-y-[5px] md:active:translate-y-[0px]">
                    <Link className="flex-1 h-full w-full relative overflow-hidden" href="https://www.linkedin.com/in/abhraneeldhar" target="_blank">
                      <Image src="https://static.vecteezy.com/system/resources/previews/023/986/608/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" className="grayscale object-contain absolute top-0 right-0 left-0 bottom-0 w-full h-full" unoptimized alt="" height={50} width={50} />
                    </Link>
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



        </div >


        {/* banner */}
        <Image unoptimized src="/footerBanner.png" height={250} width={400} className="object-cover mx-auto w-full invert dark:invert-0 dark:opacity-[0.7] px-[10px] " alt="" />

      </div >

    </div >)
}