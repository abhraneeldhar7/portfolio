import Image from "next/image"
import styles from "./frontend.module.css"
import { TextGenerateEffect } from "../ui/shadcn-io/text-generate-effect"

export default function FrontendBox() {

    return (
        <div className="relative">

            <div className="w-[200px] h-[100px] overflow-hidden relative">
                <div className={styles.main}>
                    <div className="relative w-full h-full">
                        <Image src="/laptop-mockup.png" unoptimized alt="" height={200} width={200} priority/>
                    </div>
                    <h1 className="font-[Satoshi] absolute top-[50%] left-[50%] translate-y-[-30%] translate-x-[-50%] text-[22px] font-[600]">
                        Front-end
                    </h1>
                </div>
            </div>
            <div className={styles.bottomDiv}></div>
        </div>
    )
}