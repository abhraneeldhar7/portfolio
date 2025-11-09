"use client"
import { useEffect, useState } from "react";
import DesignerHero from "../heroComp/designer";
import FrontendBox from "../heroComp/frontend";

export default function CardAnimComponent() {


    useEffect(() => {
        const interval = setInterval(() => {
            setHeroCardIndex((prev) => (prev >= 1 ? 0 : prev + 1));
        }, 5000);
        return () => {
            clearInterval(interval)
        };
    }, []);


    const [heroCardIndex, setHeroCardIndex] = useState(0);


    return (<>
        {heroCardIndex == 0 &&
            <DesignerHero />
        }
        {heroCardIndex == 1 &&
            <FrontendBox />
        }
    </>)
}