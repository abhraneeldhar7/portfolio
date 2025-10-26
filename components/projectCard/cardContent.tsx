import { ProjectType } from "@/lib/types";
import { Button } from "../ui/button";
import { BookOpenCheck, GithubIcon, GlobeIcon, Square } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { StoryViewer } from "./storyCard";

export default function ProjectCardContent({ initCurrentProjectDetails, fullscreen = false }: { initCurrentProjectDetails: ProjectType, fullscreen?: boolean }) {
    const [viewMode, setViewMode] = useState<"story" | "details">("details");

    const [currentProjectDetails, setCurrentProjectDetails] = useState(initCurrentProjectDetails);



    return (<div className={`w-full flex flex-col justify-between gap-[10px]`}>
        {viewMode == "details" && <>

            {currentProjectDetails.thumbnailUrl &&
                <Image src={`${currentProjectDetails.thumbnailUrl}`} className="rounded-[10px] w-full object-cover h-[280px] object-top" height={300} width={500} alt="" unoptimized />}


            <div className="flex flex-col flex-1 overflow-hidden relative">
                <div className="p-[15px] pt-0 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between items-start gap-[10px]">
                            <h1 className="font-[500] text-[25px] leading-[1.4em]">{currentProjectDetails.title}</h1>
                            <div className="flex justify-end gap-[10px]">
                                <Button className="h-[30px] bg-[#FA2A55] hover:bg-[#FA2A55]/80 text-[white]" onClick={() => setViewMode("story")}>Story Mode</Button>

                            </div>
                        </div>
                        <p className="text-[15px] font-[380]">{currentProjectDetails.description}</p>
                    </div>



                    <div>
                        {currentProjectDetails.techStack.length > 0 &&
                            <>
                                <h1 className="font-[400] text-[18px] mt-[18px] flex gap-[6px] items-center opacity-[0.9]">Techstacks</h1>
                                <div className="flex flex-wrap gap-[6px] mt-[5px]">
                                    {currentProjectDetails?.techStack.map((ts, index) => (
                                        <div className="border border-border/60 text-[12px] py-[6px] px-[14px] rounded-[30px] bg-primary text-background leading-[1em]  flex items-center gap-[6px] " key={index}>{ts}</div>
                                    ))}
                                </div>
                            </>}

                        <div className="flex gap-[10px] mt-[15px] flex-wrap">
                            {currentProjectDetails.gitRepoUrl &&
                                <Link href={currentProjectDetails.gitRepoUrl} target="_blank" className="flex-1" >
                                    <Button className="w-full" variant="outline"><GithubIcon /> Source Code</Button>
                                </Link>
                            }
                            {currentProjectDetails.liveLink &&
                                <Link href={currentProjectDetails.liveLink} target="_blank" className="flex-1" >
                                    <Button className="w-full" variant="outline"><GlobeIcon /> Live Link</Button>
                                </Link>
                            }
                            {currentProjectDetails.blogLink &&
                                <Link href={currentProjectDetails.blogLink} target="_blank" className="flex-1" >
                                    <Button className="w-full" variant="outline"><BookOpenCheck /> Project Blog</Button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* {globalProjectsArray && globalProjectsArray.length > 1 &&
                <div className="flex justify-between px-[4px] pb-[4px]">
                    {currentIndex > 0 &&
                        <Button variant="secondary" className="h-[28px] text-[12px]" onClick={() => {
                            goToPrevProject();
                        }}>Prev</Button>
                    }
                    <div></div>
                    {currentIndex < globalProjectsArray.length - 1 &&
                        <Button variant="secondary" className="h-[28px] text-[12px]" onClick={() => { goToNextProject() }}>Next</Button>
                    }
                </div>
            } */}
        </>}

        {viewMode == "story" &&
            <div className="w-full h-full flex items-center justify-between flex-col gap-[15px]">
                <div className="h-full w-full">
                    <StoryViewer storyFragments={currentProjectDetails.storyFragments} />
                </div>
                <div className="flex w-full p-[10px]">
                    <Button onClick={() => setViewMode("details")}>Stop <Square fill="var(--background)" /></Button>
                </div>
            </div>
        }


    </div>)
}