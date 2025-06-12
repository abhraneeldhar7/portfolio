import styles from "./root.module.css"
import Image from "next/image"
import Xlogo from "../public/x-social-media-white-icon.svg"
import { Github, Linkedin, Mail } from "lucide-react"
import bugspotLogo from "../public/bugspotLogo.png"
import Link from "next/link"
import { cn } from "@/lib/utils";

export default function RotPage() {

  return (
    <div className={styles.main}>
      <div className={cn(
        "z-[-1]",
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
      )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>



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

            <Link href="linkedin.com/in/abhraneeldhar" target="_blank">
              <div className={styles.socialsItem}>
                <Linkedin size={15} color="white" />
                <p>LinkedIn</p>
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


          </div>
        </div>


        <div className={styles.projectsSection}>
          <h1 className="text-[27px]">Proof of work</h1>

          <div className={styles.projectsHolder}>
            <div className={styles.projectItem}>
              <Image alt="" src="https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749735487/Screenshot_2025-06-12_190457_zbgesw.png" height={150} width={300} unoptimized />

              <p>Collaborative team-builder social media with blogs community and in-built team builder for projects and events</p>
            </div>
          </div>

        </div>
      </div>
    </div>)
}