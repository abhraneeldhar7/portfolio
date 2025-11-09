"use client"

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar"
import { NumberTicker } from "../ui/number-ticker";

export default function GithubCalendarCustom() {
    const [totalGithubContributions, setTotalGithubContributions] = useState<number | null>(null);
    const contriHelper = (contriNumber: number) => {
        setTimeout(() => {
            setTotalGithubContributions(contriNumber)
        }, 0)
    }

    const selectLastHalfYear = (
        contributions: {
            date: string;
            count: number;
            level: 0 | 1 | 2 | 3 | 4;
        }[]
    ) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 10;

        const filtered = contributions.filter((activity) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });

        const total = filtered.reduce((acc, activity) => acc + activity.count, 0);
        contriHelper(total)

        return filtered;
    };

    const chartTheme = {
        light: ['#fdc4d7', '#f09bb7', '#f07ba2', '#f05b8c', '#f71e67'],
        dark: [
            'rgba(253, 196, 215, 0.35)',  // lightest, soft tint
            'rgba(249, 146, 180, 0.65)',  // gentle fade-in
            'rgba(235, 105, 148, 0.75)',  // medium
            'rgba(247, 50, 116, 0.85)',   // strong
            'rgba(247, 30, 103, 1.0)'     // solid base color
        ],
    }



    return (<div className="flex justify-end md:flex-row flex-col gap-[10px] md:gap-[25px] mt-[40px] md:mt-[50px]">

        <Link href={`https://github.com/abhraneeldhar7`} target="_blank" className="overflow-hidden relative h-[140px] items-center flex w-full bg-background">
            <div className="w-[45px] z-[2] h-full bg-gradient-to-r from-background absolute left-[-2px] to-transparent"></div>
            <div className="w-fit absolute right-0">
                <GitHubCalendar
                    transformData={selectLastHalfYear}
                    username="abhraneeldhar7" hideMonthLabels hideColorLegend hideTotalCount
                    transformTotalCount={false}
                    theme={chartTheme}
                    blockMargin={2}
                    blockSize={17}
                />
            </div>
        </Link>

        <div className="flex md:flex-col gap-[20px] justify-between items-start md:justify-start mt-[10px] leading-[1em]">
            {totalGithubContributions &&
                <NumberTicker className="font-[600] md:text-[30px] text-[26px]" value={totalGithubContributions} />
            }

            <Link href={`https://github.com/abhraneeldhar7`} target="_blank" className="flex items-center gap-[5px]">
                <p>abhraneeldhar7</p>
                <ArrowUpRight size={16} />
            </Link>
        </div>

    </div>)
}