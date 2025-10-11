"use client"
import { MailIcon, Send, UserRound, Wand2Icon } from "lucide-react"
import styles from "./mailbox.module.css"
import Image from "next/image"
import { Button } from "../ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function MailboxComponent() {

    const [triggered, setTriggered] = useState(false);


    const [subject, setSubject] = useState("You had my curiosity. Now you have my attention.");
    const [body, setBody] = useState("Love what you're building, it would be great to chat and see if we can collaborate or just talk tech and ideas.");

    const [mailtoLink, setMailtoLink] = useState("")

    const mailtoLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
        const link = `mailto:abhraneeldhar@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
        setMailtoLink(link);
    }, [subject, body]);

    return (
        <div className="bg-[#FAF9F6] rounded-[24px] relative">
            <div className="flex gap-[10px] px-[20px] py-[6px] items-center bg-[#101010] rounded-tl-[20px] rounded-tr-[20px]">
                <MailIcon size={17} color="white" />
                <p className="text-[15px] text-[white]">Compose Mail</p>
            </div>
            <div className={`border-r-[1px] border-l-[1px] transition-all duraiton-400 ${!triggered ? "border-[black]/30 " : "border-[black]/0"}`}>
                <div className={`transition-all duraiton-400 pb-[10px] h-full ${triggered && styles.mailTextDiv} relative`}>

                    {triggered && <>
                        <Image unoptimized alt="" src="mailtop.png" height={300} width={300} className={`w-full h-fit object-contain absolute z-[2] ${styles.mailtop}`} />
                        <Image unoptimized alt="" src="mailbottom.png" height={300} width={300} className={`w-full h-fit object-contain absolute z-[2] ${styles.mailbottom}`} />
                    </>}

                    <div className="text-[black] p-[20px] pb-[15px] flex flex-col gap-[10px]">
                        <div className="flex gap-[20px] items-center">
                            <p className="opacity-[0.8]">To</p>
                            <div className="bg-[white] p-[2px] border border-[black]/10 rounded-[30px] flex items-center gap-[10px] shadow-sm">
                                <Image className="rounded-[50%] object-cover min-w-[25px] w-[25px] h-[25px]" unoptimized src="/pfp.jpeg" alt="" height={30} width={30} />
                                <p className="pr-[10px] text-[14px]">abhraneeldhar@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-[20px] items-center">
                            <p className="opacity-[0.8]">From</p>
                            <div className="bg-[white]  p-[2px] border border-[black]/10 rounded-[30px] flex items-center gap-[10px] shadow-sm">
                                <div className="h-[25px] w-[25px] rounded-[50%] flex items-center justify-center bg-[#F0EAD6]"><UserRound size={14} /></div>
                                <p className="pr-[10px] text-[14px] leading-[1em]">me</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#101010]/20 rounded-[10px] h-[2px] w-[92%] mx-auto"></div>
                    <div className="py-[15px] px-[20px] flex flex-col gap-[15px] bg-[#F9F6EE] mx-[10px] mt-[10px] border-[1px] border-[black]/10 rounded-[12px]">
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="subject" className="text-[16px] font-[450] text-[black] outline-0 border-0 bg-[unset]" spellCheck={false} />
                        <div className="">
                            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="body" className="text-[black] w-full outline-0 border-0 bg-[unset] font-[400] font-[Satoshi] h-full max-h-[80px] " spellCheck={false} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#101010] rounded-bl-[20px] rounded-br-[20px] w-full flex gap-[10px] justify-end p-[5px]">
                <Button className="border-[2px] border-[white]/40 bg-[unset] hover:bg-[white]/10 text-[white]">
                    <Wand2Icon /> Ask AI
                </Button>

                <Button className="bg-[white] hover:bg-[white]/80 text-[black] rounded-[4px] rounded-br-[15px]" onClick={() => {
                    setTriggered(true)
                    setTimeout(() => {
                        mailtoLinkRef.current?.click()
                        setTriggered(false)
                    }, 1600);
                }}>
                    <Send />Send</Button>
            </div>
            <Link href={mailtoLink} className="hidden" ref={mailtoLinkRef} target="_blank" />


            {triggered &&
                <div className={styles.curtain} />
            }

        </div>
    )
}