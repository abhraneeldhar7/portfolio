"use client"
import { Separator } from "@radix-ui/themes";
import DefaultBlogCard from "./blogCards";
import styles from "./blogHolder.module.css"
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
// import AddBlogBtn from "@/components/blogs/addBlogBtn";
import { BlogType, cacheBuster, userType } from "@/lib/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { createNewBlog, getDisplayBlogs, getUserDetail } from "@/app/actions/mongoFunctions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoaderCircle, NotebookIcon } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useStore } from "@/lib/store";



export default function BlogsHolder() {
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();


    // const [displayBlogs, setDisplayBlogs] = useState<BlogType[] | null>(null)
    const displayBlogs = useStore((state) => state.displayBlogs);
    const setDisplayBlogs = useStore((state) => state.setDisplayBlogs);

    // useEffect(() => {
    //     const a = async () => {
    //         if (!displayBlogs) {
    //             const res = await getDisplayBlogs();
    //             setDisplayBlogs(res);
    //         }
    //     }
    //     a();
    // }, [])

    const userDetails = useStore((state) => state.userDetails);


    const [showTextAreaLoader, setshowTextAreaLoader] = useState(false)
    return (<div className={styles.main}>
        <div className="flex w-[100%] px-[10px] flex gap-[10px] mb-[10px]" onClick={async () => {
            if (showTextAreaLoader) return
            if (sessionStatus == "loading") return;
            if (sessionStatus == "unauthenticated") {
                setshowTextAreaLoader(true);
                redirect("/login");
                return;
            }
            if (!userDetails) return;
            setshowTextAreaLoader(true);
            const newBlogId = await createNewBlog({ userId: userDetails.userId, userName: userDetails.name });
            router.push(`/blog/${newBlogId}`);
            return;
        }}>
            {userDetails?.imageUrl &&
                <Image className="rounded-[50%] h-[40px] w-[40px]" src={`${userDetails.imageUrl}?v=${cacheBuster}`} alt="" height={40} width={40} />
            }
            <div className="h-[60px] w-[100%] bg-[#192029] rounded-[10px] text-[15px] py-[7px] text-[#a1a1a1] flex justify-center items-center select-none">
                {showTextAreaLoader ?
                    <LoaderCircle className="animate-spin" /> :
                    <>What's on your mind?</>}
            </div>
            <Button loading={showTextAreaLoader}>
                <NotebookIcon />
            </Button>
        </div>

        {!displayBlogs?.length && (<div className="px-[10px] flex flex-col gap-[5px]">
            <Skeleton baseColor="#202020" highlightColor="#444" height={260} />
            <Skeleton baseColor="#202020" highlightColor="#444" height={260} />
            <Skeleton baseColor="#202020" highlightColor="#444" height={260} />
        </div>)}
        {displayBlogs && displayBlogs.map((blogData, index) => (<div key={index}>
            <DefaultBlogCard blogData={blogData} />
            <DropdownMenuSeparator className="w-[100%] h-[2px]" />
        </div>))}
    </div>)
}