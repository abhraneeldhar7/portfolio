"use client"

import { Send } from "lucide-react"
import { Button } from "../ui/button"
import { PillIndicator } from "../ui/shadcn-io/pill"
import MailboxComponent from "../mailBox/mailbox"
import { useState } from "react"

export const ReachOutComponent = ({ className }: { className: string }) => {

    const [showMailComp, setShowMailComp] = useState(false);

    return (
        <div className={`flex gap-[10px] h-fit mt-[40px] md:mt-[50px] ${className}`}>
            <div className="flex flex-col gap-[10px] flex-1 items-center">

                <div className={` ${!showMailComp ? "w-[180px] h-[37px] px-[10px]" : "w-full h-[400px] px-[5px]"} rounded-[10px] bg-[#e83b74] hover:bg-[#f05085] text-[white] relative transition-all duration-300 select-none cursor-pointer font-[420] overall flex items-center justify-center`} >
                    <div className={`absolute w-[120%] h-full rounded-[50%] z-[-1] bg-[#C21E56] blur-[30px]  transition-all duration-300 ${showMailComp ? "opacity-0" : "opacity-[1]"}`}></div>

                    <div className={`flex items-center justify-center gap-[10px] transition-all duration-300 ${showMailComp ? "h-0 w-0" : "h-fit w-fit"} overflow-hidden`}>
                        <Send size={18} />  Get in touch
                    </div>

                    {showMailComp && <MailboxComponent />}
                </div>

                <div className="flex items-center gap-[10px] text-[11px] border font-[400] h-[30px] bg-muted w-[120px] py-[8px] px-[12px] rounded-[15px] leading-[1em]">
                    <PillIndicator pulse variant="success" />
                    <p className="text-center w-full">Open to work</p>
                </div>
            </div>
        </div>)
}