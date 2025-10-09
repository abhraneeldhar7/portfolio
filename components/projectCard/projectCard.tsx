import { ProjectType } from "@/lib/types";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import ProjectCardContent from "./cardContent";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project }: { project: ProjectType }) {
    const [openDialog, setOpenDialog] = useState(false);
    return (
        <>
            <div className="p-[5px] rounded-[10px] h-[320px] flex flex-col justify-between border-[1px] border-foreground/20 dark:bg-[#101010] bg-muted relative" onClick={() => setOpenDialog(true)}>
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
                <div className="flex gap-[5px] justify-end">
                    <Button variant="outline" className="border-[1px] h-[37px]">View details</Button>
                    <Link href={project.liveLink || ""} target="_blank">
                        <Button onClick={(e) => {
                            e.stopPropagation();
                        }}>Visit <ArrowUpRight /></Button>
                    </Link>
                </div>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTitle className="hidden" />
                <DialogDescription className="hidden" />
                <DialogContent className="dark:bg-[#101010] bg-muted outline-none p-[5px]">
                    <ProjectCardContent initCurrentProjectDetails={project} />
                </DialogContent>
            </Dialog>
        </>
    )
}