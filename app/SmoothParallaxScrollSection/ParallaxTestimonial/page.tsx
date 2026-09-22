"use client"
import Image from "next/image"
import 'lenis/dist/lenis.css'
import { useRef } from "react"
import ReactLenis, { useLenis } from "lenis/react"
import { motion, useAnimationFrame, useMotionValue, useScroll, useVelocity, type MotionValue } from 'motion/react'
import { cn } from "@/lib/utils"
import { TweetCard } from "@/components/ui/tweet-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type TweetItem = {
    username: string
    handle: string
    avatarURL: string
    tweet: string
}

const tweets: TweetItem[] = [
    // Column 1 — indices 0-9
    {
        username: "Aria Chen",
        handle: "@aria_codes",
        avatarURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        tweet: "Switched our entire team scheduling to this platform last quarter. Zero complaints, infinite time saved. 🙌",
    },
    {
        username: "Marcus Webb",
        handle: "@marcuswebb_dev",
        avatarURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        tweet: "The parallax animations alone had me hooked. Incredible attention to detail throughout.",
    },
    {
        username: "Sofia Reyes",
        handle: "@sofiareyes",
        avatarURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        tweet: "I've tried six different booking tools this year. Nothing comes close to how polished this feels.",
    },
    {
        username: "Liam Okafor",
        handle: "@liamokafor",
        avatarURL: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        tweet: "Set up my first workflow in under 10 minutes. My clients are already sending compliments.",
    },
    {
        username: "Nadia Volkov",
        handle: "@nadiavolkov",
        avatarURL: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
        tweet: "Dark mode, clean type, fast interactions — this is how SaaS products should be built.",
    },
    {
        username: "Ethan Park",
        handle: "@ethanpark_ui",
        avatarURL: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
        tweet: "Migrated from Calendly and never looked back. The customisation options are on another level.",
    },
    {
        username: "Priya Nair",
        handle: "@priyanair",
        avatarURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        tweet: "Every stakeholder in our org uses it daily. Adoption was instant — that says everything.",
    },
    {
        username: "Daniel Russo",
        handle: "@danielrusso_ux",
        avatarURL: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        tweet: "Honestly thought I'd use it for a week and move on. Six months later and it's core to how we operate.",
    },
    {
        username: "Yuki Tanaka",
        handle: "@yukitanaka",
        avatarURL: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
        tweet: "The notification system is chef's kiss. Never miss a meeting now, which my clients absolutely love.",
    },
    {
        username: "Camille Dupont",
        handle: "@camilledupont",
        avatarURL: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
        tweet: "Runs flawlessly on mobile. I manage all my appointments from my phone while commuting. Game changer.",
    },

    // Column 2 — indices 10-19
    {
        username: "Ravi Sharma",
        handle: "@ravisharma_dev",
        avatarURL: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
        tweet: "The onboarding flow is so intuitive I didn't need to read a single doc. Rare for B2B software.",
    },
    {
        username: "Isla MacLeod",
        handle: "@islamacleod",
        avatarURL: "https://images.unsplash.com/photo-1521119989659-a83eebb1aa5a?w=400&h=400&fit=crop",
        tweet: "Reduced no-shows by 40% in the first month just by enabling the reminder feature. Incredible ROI.",
    },
    {
        username: "Jonas Becker",
        handle: "@jonasbecker",
        avatarURL: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=400&h=400&fit=crop",
        tweet: "The API is clean and well-documented. We integrated it into our CRM in a single afternoon.",
    },
    {
        username: "Amara Diallo",
        handle: "@amaradiallo",
        avatarURL: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
        tweet: "Beautiful product. My booking page looks so professional that clients actually compliment it.",
    },
    {
        username: "Oliver Tan",
        handle: "@olivertan_pm",
        avatarURL: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
        tweet: "We replaced three separate tools with this single platform. Our stack is leaner and life is good.",
    },
    {
        username: "Fatima Al-Hassan",
        handle: "@fatimaalhassan",
        avatarURL: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
        tweet: "Support team responded in under 5 minutes on a Sunday. That kind of care is rare.",
    },
    {
        username: "Ben Kowalski",
        handle: "@benkowalski",
        avatarURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        tweet: "Smooth, fast, and reliable. In two years I've had exactly zero outages. Solid engineering.",
    },
    {
        username: "Mei Lin",
        handle: "@meilin_design",
        avatarURL: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        tweet: "As a designer I'm picky about UI. This product passes every test with flying colours.",
    },
    {
        username: "Hugo Ferreira",
        handle: "@hugoferreira",
        avatarURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        tweet: "The analytics dashboard gives me insights I never had with our old system. Highly recommend.",
    },
    {
        username: "Aisha Mohammed",
        handle: "@aishamohammed",
        avatarURL: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop",
        tweet: "Helped our remote team stay coordinated across four time zones without a single scheduling conflict.",
    },

    // Column 3 — indices 20-29
    {
        username: "Chris Nguyen",
        handle: "@chrisnguyen",
        avatarURL: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop",
        tweet: "Gorgeous landing page, even better product. Delivered exactly what was promised and then some.",
    },
    {
        username: "Zara Patel",
        handle: "@zarapatel",
        avatarURL: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        tweet: "Calendar sync with Google and Outlook works perfectly. I was sceptical but it's seamless.",
    },
    {
        username: "Leo Svensson",
        handle: "@leosvensson",
        avatarURL: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
        tweet: "Our sales team shortened the demo scheduling cycle from 3 days to 30 minutes. Phenomenal.",
    },
    {
        username: "Clara Fischer",
        handle: "@clarafischer",
        avatarURL: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=400&h=400&fit=crop",
        tweet: "I recommended it to five colleagues and all five are now paying customers. The product sells itself.",
    },
    {
        username: "Kwame Asante",
        handle: "@kwameasante",
        avatarURL: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&h=400&fit=crop",
        tweet: "Finally a scheduling tool that doesn't feel like it was built in 2009. Modern, clean, delightful.",
    },
    {
        username: "Elena Kozlov",
        handle: "@elenakozlov",
        avatarURL: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        tweet: "The team event feature is underrated. Running cross-timezone workshops has never been this painless.",
    },
    {
        username: "Sam Torres",
        handle: "@samtorres_eng",
        avatarURL: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        tweet: "Webhook support is solid. We pipe booking events straight into our data warehouse. Love it.",
    },
    {
        username: "Hana Yamamoto",
        handle: "@hanayamamoto",
        avatarURL: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=400&h=400&fit=crop",
        tweet: "Clients tell me my booking link 'looks premium'. That reflection on my brand is priceless.",
    },
    {
        username: "Finn O'Brien",
        handle: "@finnobrien",
        avatarURL: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
        tweet: "Switched on a Friday afternoon, fully operational Monday morning. The migration was effortless.",
    },
    {
        username: "Leila Hosseini",
        handle: "@leilahosseini",
        avatarURL: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
        tweet: "The best investment we made this year was switching to this platform. Our productivity speaks for itself.",
    },
]

export default function page() {


    // const lenis = useLenis((lenis) => {
    //     // called every scroll
    //     console.log(lenis)
    // })

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Scroll velocity — 0 at rest, spikes while scrolling; passed down to each ColumnCard
    const scrollVelocity = useVelocity(scrollYProgress)

    return (
        // <div className="relative bg-neutral-800 p-4 w-screen ">
        //     <div ref={ref} className=" flex justify-center md:justify-between items-start gap-8 md:gap-8  md:h-[175vh] w-full p-4 overflow-hidden bg-neutral-900 my-[100vh] rounded-xl border-2 border-black">
        //         <ReactLenis root />
        //         <ColumnCard images={[images[0], images[1], images[2], images[3]]} y={y} />
        //         <ColumnCard images={[images[3], images[4], images[5], images[6]]} y={y2} />
        //         <ColumnCard images={[images[6], images[7], images[8], images[9]]} y={y3} />
        //         <ColumnCard images={[images[9], images[10], images[11], images[1]]} y={y4} />
        //     </div>
        // </div>

        // <div className="flex justify-center items-center w-screen h-screen bg-neutral-200">
        //     <XCard />
        // </div>

        <div ref={ref} className="flex justify-center items-center w-screen h-[300vh] bg-neutral-100">
            <ReactLenis root />
            <div className="flex flex-col justify-center items-center gap-20 w-full max-w-6xl h-full px-20 gap-2 border border-neutral-200">
                <div className="title flex flex-col justify-center items-center w-full">
                    <span className="rounded-4xl px-2 text-xs bg-white text-neutral-800 mb-2 border border-neutral-300">Testimonials</span>
                    <h1 className="font-bold text-4xl  font-mono ">See what our clients says about us</h1>
                    <p className="text-neutral-800/80 font-mono text-sm">Read the impact we've had from those who matter most - our customers.</p>
                </div>

                <div className="tweet-container flex justify-center items-center gap-4 w-full h-[500px]  overflow-hidden">

                    <ColumnCard items={tweets.slice(0, 10)} scrollVelocity={scrollVelocity} direction={-1} baseSpeed={0.04} />
                    <ColumnCard items={tweets.slice(10, 20)} scrollVelocity={scrollVelocity} direction={1} baseSpeed={0.05} />
                    <ColumnCard items={tweets.slice(20, 30)} scrollVelocity={scrollVelocity} direction={-1} baseSpeed={0.045} />



                </div>
            </div>
        </div>

    )
}

function ColumnCard({
    items,
    scrollVelocity,
    direction = -1,
    baseSpeed = 0.04,
}: {
    items: TweetItem[]
    scrollVelocity: MotionValue<number>
    direction?: 1 | -1
    baseSpeed?: number
}) {
    const pos = useRef(0)
    const autoY = useMotionValue(0)
    const columnRef = useRef<HTMLDivElement>(null)

    useAnimationFrame((_t, delta) => {
        // offsetHeight spans both duplicated halves — divide by 2 for one loop cycle
        const loopHeight = columnRef.current ? columnRef.current.offsetHeight / 2 : 0
        if (loopHeight === 0) return

        const vel = Math.abs(scrollVelocity.get())
        const boost = 1 + vel * 8

        pos.current += direction * baseSpeed * boost * delta

        // Seamless wrap — second half is identical so the reset is invisible
        if (direction === -1 && pos.current <= -loopHeight) {
            pos.current += loopHeight
        }
        if (direction === 1 && pos.current >= loopHeight) {
            pos.current -= loopHeight
        }

        autoY.set(pos.current)
    })

    return (
        <div className="flex flex-col justify-center items-center w-[25vw] md:min-w-[250px] min-w-[200px] overflow-hidden">
            <motion.div
                ref={columnRef}
                className="flex flex-col gap-8 w-full"
                style={{ y: autoY }}
            >
                {[...items, ...items].map((item, idx) => (
                    <XCard
                        key={idx}
                        username={item.username}
                        handle={item.handle}
                        avatarURL={item.avatarURL}
                        tweet={item.tweet}
                    />
                ))}
            </motion.div>
        </div>
    )
}








export function XCard({ username, handle, avatarURL, tweet }: { username: string, handle: string, avatarURL: string, tweet: string }) {

    return (
        <div className="flex flex-col justify-center items-center bg-white rounded-md border border-neutral-400/40 gap-4 p-4 w-full max-w-[300px] font-mono">
            <div className="flex justify-start items-center w-full gap-2">
                <Avatar size="">
                    <AvatarImage src={avatarURL} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-start">
                    <a className="text- leading-4">{username}</a>
                    <a className="text-xs text-primary/80 font-extralight">{handle}</a>
                </div>
            </div>
            <div className="font-light text-sm font-serif w-full">
                {tweet}
            </div>
        </div>
    )
}