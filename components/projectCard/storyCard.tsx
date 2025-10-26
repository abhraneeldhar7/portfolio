"use client"
import { useState, useEffect, useRef } from "react"
import { Triangle } from "lucide-react"
import { TextGenerateEffect } from "../ui/shadcn-io/text-generate-effect"

interface StoryFragment {
    index: number
    title: string
    textContent: string
    cardColor: string
}

interface StoryViewerProps {
    storyFragments: StoryFragment[]
}

export function StoryViewer({ storyFragments }: StoryViewerProps) {
    // --- STATE MANAGEMENT ---
    const [currentFragmentIndex, setCurrentFragmentIndex] = useState(0)
    const [textOffset, setTextOffset] = useState(0)
    const [displayedText, setDisplayedText] = useState("")
    const [timelineProgress, setTimelineProgress] = useState(0)
    const [currentViewDuration, setCurrentViewDuration] = useState(3000) // For dynamic transition speed
    const cardRef = useRef<HTMLDivElement>(null)

    // --- DYNAMIC CALCULATIONS ---
    const [cardWidth, setCardWidth] = useState(400) // Default width
    useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth)
        }
    }, [])

    const CHARS_PER_VIEW = Math.floor(cardWidth / 2.5) // Characters per text chunk
    const CHAR_READING_SPEED = 50 // ms per character
    const MIN_DURATION_PER_FRAGMENT = 3000 // Minimum 3 seconds per fragment

    const currentFragment = storyFragments[currentFragmentIndex]

    // --- HELPER FUNCTION (Unchanged) ---
    const getTextChunk = (text: string, startOffset: number, maxChars: number) => {
        if (!text || startOffset >= text.length) {
            return { chunk: "", nextOffset: text?.length || 0, hasMore: false }
        }
        let endOffset = Math.min(startOffset + maxChars, text.length)
        if (endOffset < text.length) {
            const lastSpace = text.lastIndexOf(" ", endOffset)
            if (lastSpace > startOffset) {
                endOffset = lastSpace
            }
        }
        const chunk = text.slice(startOffset, endOffset).trim()
        const hasMore = endOffset < text.length
        const isContinuation = startOffset > 0
        let displayChunk = chunk
        if (isContinuation) displayChunk = "- " + displayChunk
        if (hasMore) displayChunk = displayChunk + "..."
        return { chunk: displayChunk, nextOffset: endOffset + 1, hasMore }
    }

    // --- CORE LOGIC: Replaces rAF with a declarative effect ---
    useEffect(() => {
        if (!currentFragment) return

        // 1. Calculate durations for the current fragment
        const fragmentDuration = Math.max(MIN_DURATION_PER_FRAGMENT, currentFragment.textContent.length * CHAR_READING_SPEED)
        const totalViews = Math.ceil(currentFragment.textContent.length / CHARS_PER_VIEW) || 1
        const viewDuration = fragmentDuration / totalViews
        setCurrentViewDuration(viewDuration)

        // 2. Set the text content for the current view
        const { chunk, nextOffset, hasMore } = getTextChunk(currentFragment.textContent, textOffset, CHARS_PER_VIEW)
        setDisplayedText(chunk)

        // 3. Calculate total progress for the timeline bar
        const calculateTotalProgress = (targetOffset: number) => {
            let progressBefore = 0
            let totalDuration = 0

            // Calculate total duration of all stories
            storyFragments.forEach(frag => {
                totalDuration += Math.max(MIN_DURATION_PER_FRAGMENT, frag.textContent.length * CHAR_READING_SPEED)
            });
            if (totalDuration === 0) return 0;

            // Calculate duration of preceding fragments
            for (let i = 0; i < currentFragmentIndex; i++) {
                const frag = storyFragments[i];
                progressBefore += (Math.max(MIN_DURATION_PER_FRAGMENT, frag.textContent.length * CHAR_READING_SPEED) / totalDuration) * 100
            }

            // Calculate progress within the current fragment
            const currentFragmentPercent = (fragmentDuration / totalDuration) * 100
            const progressInCurrent = (targetOffset / currentFragment.textContent.length) * currentFragmentPercent

            return progressBefore + progressInCurrent
        }

        // Set the timeline to its new target width, triggering the CSS transition
        const newProgress = calculateTotalProgress(nextOffset)
        setTimelineProgress(newProgress)


        // 4. Set a timer to advance to the next state
        const timer = setTimeout(() => {
            if (hasMore) {
                // Advance to the next chunk in the same fragment
                setTextOffset(nextOffset)
            } else if (currentFragmentIndex < storyFragments.length - 1) {
                // Advance to the next fragment
                setCurrentFragmentIndex(currentFragmentIndex + 1)
                setTextOffset(0)
            } else {
                // Loop back to the beginning
                setCurrentFragmentIndex(0)
                setTextOffset(0)
                // Instantly snap progress to 0 for the loop
                setTimelineProgress(0)
                setCurrentViewDuration(0) // No transition for the reset
            }
        }, viewDuration)

        // Cleanup function to clear the timer
        return () => clearTimeout(timer)

    }, [currentFragmentIndex, textOffset, storyFragments, CHARS_PER_VIEW])


    // --- RENDER LOGIC (Design is unchanged) ---
    const segmentWidths = storyFragments.map(frag => {
        const fragDuration = Math.max(MIN_DURATION_PER_FRAGMENT, frag.textContent.length * CHAR_READING_SPEED)
        const totalDuration = storyFragments.reduce((sum, f) => sum + Math.max(MIN_DURATION_PER_FRAGMENT, f.textContent.length * CHAR_READING_SPEED), 0)
        return (fragDuration / totalDuration) * 100
    })

    return (
        <div className="w-full h-96 flex flex-col transition-colors duration-500 gap-[10px]" >
            {/* Content Area */}
            <div ref={cardRef} className="flex-1 flex overflow-hidden rounded-[10px] p-[15px] pt-[22px] relative" style={{
                backgroundColor: currentFragment?.cardColor,
            }}>
                <p className="absolute top-[5px] left-[10px] text-[14px] font-[Sans3] font-[600] text-[black] opacity-[0.8]">{storyFragments[currentFragmentIndex].title}</p>
                {displayedText &&
                    // Using a key forces the TextGenerateEffect to re-mount and re-animate
                    <div key={displayedText}>
                        <TextGenerateEffect className="text-[30px] font-[450] text-[black] leading-[1.4em] drop-shadow-lg" words={displayedText} staggerDelay={0.15} />
                    </div>
                }
            </div>

            {/* Timeline */}
            <div>
                <div className="relative h-[35px] flex gap-[5px] rounded-[6px]">
                    {storyFragments.map((fragment, index) => {
                        const isActive = index === currentFragmentIndex
                        return (
                            <div
                                key={index}
                                className={`h-full flex items-center justify-center px-2 relative transition-all duration-300 rounded-[6px] ${isActive ? "" : "bg-background/80 border border-border/80"}`}
                                style={{
                                    width: `${segmentWidths[index] || 0}%`,
                                    backgroundColor: isActive ? fragment.cardColor : ""
                                }}
                            // onClick={()=>setCurrentFragmentIndex(index)}
                            >
                                {isActive && (
                                    <span className="text-xs font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis relative z-10">
                                        {fragment.title}
                                    </span>
                                )}
                            </div>
                        )
                    })}

                    {/* The timeline progress indicator is now driven by state and CSS transition */}
                    <div
                        className="absolute top-0 left-0 h-full pointer-events-none border-foreground border-r-[2px]"
                        style={{
                            width: `${timelineProgress}%`,
                            transition: `width ${currentViewDuration}ms linear` // Dynamic duration
                        }}>
                        <div className="h-full w-full relative">
                            <Triangle color="var(--foreground)" fill="var(--foreground)" size={12} className="absolute bottom-[-14px] right-[-7px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}