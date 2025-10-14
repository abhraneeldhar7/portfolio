"use client"
import { MailIcon, Send, UserRound, Wand2Icon } from "lucide-react"
import styles from "./mailbox.module.css"
import Image from "next/image"
import { Button } from "../ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog"
import { writeMessage } from "@/app/actions/groqActions"

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

    const [userText, setUserText] = useState("");
    const [aiDialogOpen, setAiDialog] = useState(false);
    const [fetchingAIRes, setfetchingAIRes] = useState(false);

    return (
        <div className="rounded-[20px] relative border overflow-hidden">

            <div className="flex gap-[10px] px-[20px] py-[10px] items-center dark:bg-[#111111] bg-[#f0ebdc] rounded-tl-[20px] rounded-tr-[20px]">
                <MailIcon size={17} />
                <p className="text-[15px]">Compose Mail</p>
            </div>
            <div className="bg-[#FAF9F6] dark:bg-[#303030] transition-all duraiton-400">

                <div className={`transition-all duraiton-400 pb-[10px] h-full ${triggered && styles.mailTextDiv} relative`}>

                    <Image unoptimized alt="" src="mailtop.png" height={300} width={300} className={`w-full h-fit object-contain absolute ${!triggered && "top-[-400vh]"}  z-[2] ${triggered && styles.mailtop}`} priority />
                    <Image unoptimized alt="" src="mailbottom.png" height={300} width={300} className={`w-full h-fit object-contain absolute ${!triggered && "top-[400vh]"} z-[2] ${triggered && styles.mailbottom}`} priority />

                    <div className="p-[20px] pb-[15px] flex flex-col gap-[10px]">
                        <div className="flex gap-[20px] items-center">
                            <p className="opacity-[0.8]">To</p>
                            <div className="dark:bg-[#3e3e32] bg-[white] p-[2px] border border-[black]/10 rounded-[30px] flex items-center gap-[10px] shadow-sm">
                                <Image className="rounded-[50%] object-cover min-w-[25px] w-[25px] h-[25px]" unoptimized src="/pfp.jpeg" alt="" height={30} width={30} />
                                <p className="pr-[10px] text-[14px]">abhraneeldhar@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-[20px] items-center">
                            <p className="opacity-[0.8]">From</p>
                            <div className="dark:bg-[#3e3e32] bg-[white]  p-[2px] border border-[black]/10 rounded-[30px] flex items-center gap-[10px] shadow-sm">
                                <div className="h-[25px] w-[25px] rounded-[50%] flex items-center justify-center bg-[#F0EAD6]"><UserRound size={14} color="black" /></div>
                                <p className="pr-[10px] text-[14px] leading-[1em]">me</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#101010]/20 dark:bg-foreground/40 rounded-[10px] h-[2px] w-[92%] mx-auto"></div>
                    <div className={`py-[15px] px-[20px] flex flex-col gap-[15px] dark:bg-[#212121] bg-[#F9F6EE] mx-[10px] mt-[10px] border-[1px] border-[black]/10 rounded-[12px]`}>
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="subject" className="md:text-[16px] text-[14px] font-[450] outline-0 border-0 bg-[unset] opacity-[0.8]" spellCheck={false} />

                        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="body" className={`w-full outline-0 border-0 bg-[unset] font-[Satoshi] h-[70px] max-h-[70px] min-h-[70px] ${triggered && styles.textbox}`} spellCheck={false} />

                    </div>
                </div>
            </div>
            <div className="dark:bg-[#111111] bg-[#f0ebdc] rounded-bl-[20px] rounded-br-[20px] w-full flex gap-[10px] justify-end p-[5px]">
                <Dialog open={aiDialogOpen} onOpenChange={(e) => {
                    setUserText("");
                    setAiDialog(e);
                    setfetchingAIRes(false)
                }}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="dark:bg-[unset] bg-[white] border-[1px] border-foreground/20">
                            <Wand2Icon /> Ask AI
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="p-[15px]">
                        <DialogTitle>Write with AI</DialogTitle>
                        <DialogDescription>Briefly describe your message and AI will make it beautiful.</DialogDescription>
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            if (!userText.length) return;
                            setfetchingAIRes(true)
                            const res = JSON.parse(await writeMessage(userText));
                            setfetchingAIRes(false)
                            console.log(res)
                            setSubject(res.subject)
                            setBody(res.body)
                            setAiDialog(false)

                        }} className="flex flex-col gap-[15px]">
                            <textarea value={userText} onChange={(e) => {
                                setUserText(e.target.value)
                            }} placeholder="Main talking points" className="dark:bg-muted/50 bg-muted rounded-[8px] text-[14px] p-[12px] font-[350] outline-none" spellCheck={false} />

                            <div className="flex justify-end">
                                <Button loading={fetchingAIRes} disabled={!userText.length} type="submit"><Wand2Icon /> Generate</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                <Button className="bg-[#e83b74] hover:bg-[#f7538a] text-[white] rounded-[4px] rounded-br-[15px]" onClick={() => {
                    setTriggered(true)
                    setTimeout(() => {
                        mailtoLinkRef.current?.click()
                        setTriggered(false)
                    }, 1800);
                }}>
                    <Send />Send</Button>
            </div>
            <Link href={mailtoLink} className="hidden" ref={mailtoLinkRef} target="_blank" />


            {
                triggered &&
                <div className={styles.curtain} />
            }

        </div >
    )
}