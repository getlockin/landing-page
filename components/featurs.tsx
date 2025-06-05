import FeaturesCard from "./featuresCard";
import Feature01 from "@/public/features/feature01.png"
import Feature02 from "@/public/features/feature2.png"
import Feature03 from "@/public/features/features3.png"
import Feature04 from "@/public/features/feature4.png"

export default function Features() {
    return (
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-[48px] font-bold">Features</h1>
        <p className="text-center">Powerful additions that enhance flexibility, speed, and team collaboration.</p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 my-[80px]">
            <FeaturesCard subheading="Set real targets, not just tasks" paragraph="Join curated 21-day habit challenges or create your own. every goal has clear rules, timelines, and stakes to keep you consistent." image={Feature01} />

            <FeaturesCard subheading="Daily proof uploads" paragraph="Complete your goal by uploading simple daily proof — like a photo or short video. visible proof builds trust and keeps you honest." image={Feature02} />

            <FeaturesCard subheading="Stake & earn system" paragraph="Stake lockin tokens or usdc to join challenges. follow through and earn rewards. miss a day, and your stake goes to others who showed up." image={Feature03} />

            <FeaturesCard subheading="Powered by solana" paragraph="Built on solana for low fees, fast staking, and transparent logic — every challenge and payout is verifiable and secure." image={Feature04} />

        </div>
        </div>
    )
}