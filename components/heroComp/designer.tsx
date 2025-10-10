import { MousePointer2, Plus } from "lucide-react"
import styles from "./designer.module.css"

export default function DesignerHero() {
    return (
        <div className={styles.main}>
            <p>Designer</p>
            <MousePointer2 fill="white" color="white" size={25} className={styles.cursor} />

            <Plus size={18} className={styles.plus1}/>
            <Plus size={18} className={styles.plus2}/>

            <div className="absolute top-0 left-0 overflow-hidden h-full w-full z-[1]">
                <div className="relative h-full w-full">
                    <div className={`absolute ${styles.gridContainer} bottom-[-2px] right-[-2px] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.3]`} />
                </div>
            </div>
        </div>
    )
}