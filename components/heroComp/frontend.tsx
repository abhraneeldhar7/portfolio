import Image from "next/image"
import styles from "./frontend.module.css"
import { TextGenerateEffect } from "../ui/shadcn-io/text-generate-effect"

export default function FrontendBox() {

    return (
        <div className="relative">
            {/* <div className={styles.shadowDiv}></div> */}
            <div className="w-[200px] h-[100px] overflow-hidden relative">
                <div className={styles.main}>
                    <div className="relative w-full h-full">
                        <Image src="/laptop-mockup.png" unoptimized alt="" height={200} width={200} priority />
                    </div>
                    <h1 className={`font-[Satoshi] absolute top-[40px] left-[50%] translate-x-[-50%] text-[22px] font-[600] text-[white] z-[2] ${styles.heading}`}>
                        Front-end
                    </h1>
                    <div className={styles.orb}></div>
                </div>
            </div>
        </div>
    )
}