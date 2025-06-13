"use client"
import { ProjectType } from "@/lib/types";
import styles from "./projectCard.module.css"
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Book, BookOpenText, Github } from "lucide-react";
import Link from "next/link";
import { Marquee } from "../magicui/marquee";


export default function ProjectCard({ projectDetails }: { projectDetails: ProjectType }) {
    const [showFooter, setShowFooter] = useState(false);
    return (
        <div className={styles.main} onClick={() => { setShowFooter(!showFooter) }}>
            <div className={styles.projectItem}>
                <Image alt="" src={projectDetails.imageUrl} height={150} width={300} />
                <p>{projectDetails.description}</p>
            </div>
            <div className={`${styles.footerDiv} ${showFooter && styles.showFooter}`}>
                {showFooter &&
                    <div className="overflow-hidden relative">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {projectDetails.techStack.map((tech, index) => (
                                <div key={index} className={styles.techStackItem}>
                                    <p className={styles.techStack}>{tech}</p>
                                </div>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bgColor)]"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bgColor)]"></div>
                    </div>
                }

                <div className="flex gap-[10px] items-center">
                    {projectDetails.blogLink && 
                        <Button variant="ghost" >
                            Read<BookOpenText size={20} />
                        </Button>
                    }

                    {projectDetails.githubRepo &&
                        <Link href={projectDetails.githubRepo} target="_blank">
                            <Button variant="secondary" className="bg-black">
                                <Github size={20} color="white" /> Github
                            </Button>
                        </Link> }

                    {projectDetails.liveLink &&
                        <Link href={projectDetails.liveLink} target="_blank">
                            <Button>
                                Visit <ArrowUpRight size={20} />
                            </Button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}