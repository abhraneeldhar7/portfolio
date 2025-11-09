"use client"
import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useEffect, useRef, useState } from "react";

export default function ProfileImageComp() {
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


    return (<div>
        <div className={`transition-all h-[60px] flex justify-end items-center w-full fixed left-0 backdrop-blur-[40px] px-[15px] ${showTab ? "top-[0px]" : "top-[-65px]"}  z-[5]`}>
            <AnimatedThemeToggler className="shadow-md h-[32px] w-[32px] rounded-[50%] bg-[unset] hover:bg-foreground/5 text-foreground"/>
        </div>

        <div ref={tabDivRef} className="translate-y-[-30px] md:translate-y-[50px]"/>

        <Link href="/#me">
            <Image src="/pfp.jpeg" className={`rounded-[10px] z-[6] transition-all object-cover ${showTab ? "fixed top-[10px] left-[15px] rounded-[50%] h-[40px] w-[40px]" : "md:h-[140px] md:w-[140px] w-[110px] h-[110px] border p-[2px]"}`} alt="" height={100} width={100} unoptimized priority />
        </Link>


    </div>)
}
