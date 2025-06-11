import { TeamCarousel } from "@/features/team/Teamcarousel";
import { TeamHeroSection } from "@/features/team/TeamHeroSection";

export default function TeamPage () { 
    return (
        <div className="flex flex-col justify-center items-center bg-black min-h-screen">
            <TeamHeroSection />
            <TeamCarousel />
        </div>
    )
}
