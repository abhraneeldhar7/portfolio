"use client"
import styles from "./root.module.css"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"


export default function RotPage() {

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

  return (
    <div className="min-h-[200vh] w-full pt-[50px]">
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

      <div className={`transition-all h-[60px] w-full fixed left-0 backdrop-blur-[40px] ${showTab ? "top-[0px]" : "top-[-65px]"}  z-[10]`}>

      </div>


      <div>
        <Image unoptimized src="/dotsHand.png" height={250} width={400} className="object-contain w-full h-fit invert dark:invert-0 mb-[30px] md:hidden" alt="" />
      </div>


      <div className="md:px-[50px] px-[15px] w-full max-w-[800px] mx-auto">
        <div ref={tabDivRef} />
        <div className="flex md:gap-[25px] gap-[15px]">
          <Link href="/">
            <Image src="/pfp.jpeg" className={`rounded-[10px] transition-all object-cover ${showTab ? "fixed top-[10px] left-[15px] rounded-[50%] h-[40px] w-[40px]" : "md:h-[140px] md:w-[140px] w-[110px] h-[110px]  border-[2px] border-foreground/20 p-[2px]"}`} alt="" height={100} width={100} unoptimized />
          </Link>

          <div>
            <h1 className="md:text-[35px] text-[25px] font-[600] font-[Poppins] leading-[1.]">Abhraneel Dhar</h1>
            <Link href="https://x.com/abhraneeldhar" target="_blank">
              <p className="text-[15px] leading-[1.2em] opacity-[0.5]">@abhraneeldhar</p>
            </Link>
          </div>
        </div>


        <div className="mt-[20px] md:text-[22px] text-[19px]">
          <p className="font-[Poppins] text-center">I'm a software engineer building</p>
          <div>

            <div className="pt-[20px] flex gap-[15px] items-end">
              <div className="py-[7px] px-[15px] dark:bg-[#f4f5f5] bg-[#262626] rounded-[12px] md:rounded-[14px] relative md:h-[50px] h-[40px] md:w-[120px] w-[100px] flex justify-center items-center">
                <p className="text-white mix-blend-difference md:text-[21px] text-[16px] font-[370] z-[2]">
                  Websites
                </p>
                <Image src="/img3.png" className="absolute bottom-[0px] md:h-[80px] h-[60px] object-contain w-fit z-[1]" alt="" height={100} width={100} unoptimized />
              </div>


              <div className="flex items-center gap-[10px] md:text-[14px] text-[12px]">
                <p className="text-[20px]">with</p>
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

            <div className="pt-[20px] flex justify-end gap-[15px] items-end md:text-[14px] text-[12px]">

              <div className="flex items-center gap-[10px]">
                <div className="flex gap-[7px]">
                  <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                    <Image src="https://docs.flutter.dev/assets/images/flutter-logo-sharing.png" className="object-contain h-[16px] w-[20px]" unoptimized alt="" height={40} width={40} />
                    Flutter</div>

                  <div className="bg-[#303030] px-[7px] py-[5px] rounded-[10px] flex items-center gap-[6px] leading-[1em] text-[white] border-border border-[2px]">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" className="object-contain h-[20px] w-[20px]" unoptimized alt="" height={40} width={40} />
                    React Native</div>
                </div>
              </div>
              <p className="text-[20px]">and</p>
              <div className="py-[7px] px-[15px] dark:bg-[#f4f5f5] bg-[#262626] rounded-[14px] relative md:h-[50px] h-[40px] md:w-[100px] w-[70px] flex justify-center items-center">
                <p className="md:text-[21px] text-[16px] font-[500] z-[2]
                text-[white] pl-[10px] font-bold bg-[linear-gradient(to_left,black_10%,white_20%)] bg-clip-text text-transparent
                ">
                  Apps
                </p>
                <Image src="/img2.png" className="absolute bottom-[0px] md:h-[80px] h-[60px] left-[6px] object-contain w-fit z-[1]" alt="" height={100} width={100} unoptimized />
              </div>
            </div>







          </div>
        </div>

      </div>



      <AnimatedThemeToggler className="m-[20px]" />



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

    </div >)
}