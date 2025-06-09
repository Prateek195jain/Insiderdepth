
import EducationCard from "@/features/educationPage/components/EducationCard";
import Pagination from "@/features/educationPage/components/Pagination";


import { courses } from "../data/courses";

export default function EducationPage() {
  
  return (
    <main className="min-h-screen bg-black flex flex-col justify-between text-white py-15 px-6">
      <h1 className="text-3xl font-semibold text-center mb-10">Education</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {courses.map((course) => (
          <EducationCard
            key={course.id} // Har item ke liye unique key
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            BadgeType={course.badgeType} // Data se badgeType pass kiya (lowercase free/premium)
            courseSlug={course.id} 
            bgClassName={
                course.id === "introduction-to-cryptocurrency"
                  ? "bg-purple-300/10"
                  : course.id === "understanding-trading-pairs"
                  ? "bg-slate-900/70"
                  : course.id === "more-on-blockchain"
                  ? "bg-yellow-400/10"
                  : course.id === "spot-trading-vs-margin-trading"
                  ? "bg-sky-800/20"
                  : "" 
              }
              borderClassName={
                course.id === "introduction-to-cryptocurrency"
                  ? "border-purple-300/16"
                  : course.id === "understanding-trading-pairs"
                  ? "border-slate-800"
                  : course.id === "more-on-blockchain"
                  ? "border-yellow-300/20"
                  : course.id === "spot-trading-vs-margin-trading"
                  ? "border-pink-300/20"
                  : "" // Default ya fallback class
              }
          />
        ))}
      </div>
      <Pagination />
    </main>
  );
}