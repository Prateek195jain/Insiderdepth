"use client";
import { useParams } from "next/navigation";
import { courses, CourseSection, CourseTopic } from "../../data/courses";
import { useState } from "react";

const CourseTopicItem = ({ topic }: { topic: CourseTopic; index: number }) => {
  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-700 last:border-b-0">
      <div className="flex items-center">
        <span className="text-gray-400 mr-3">
          {/* Document/File Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 5a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1V9zm1 3a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="text-gray-200">{topic.title}</span>
      </div>
      <div className="flex items-center space-x-4">
        {topic.isPreview && (
          <span className="text-blue-400 text-sm cursor-pointer hover:underline">
            Preview
          </span>
        )}
        {topic.isDownload && (
          <span className="text-green-400 text-sm cursor-pointer hover:underline">
            Download
          </span>
        )}
        <span className="text-gray-400 text-sm">{topic.duration}</span>
      </div>
    </div>
  );
};

const CourseSectionAccordion = ({
  section,
  defaultOpen = false,
}: {
  section: CourseSection;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-800 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">{section.title}</h3>
          <p className="text-gray-400 text-sm">
            {section.lectures} lectures • {section.duration}
          </p>
        </div>
        <svg
          className={`w-6 h-6 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <div className="bg-gray-800">
          {section.topics.map((topic, index) => (
            <CourseTopicItem key={index} topic={topic} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;

  const course = courses.find((c) => c.id === courseId);

  // Agar course nahi mila toh 404 ya loading state
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-2xl">Course not found or loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <main className="container mx-auto px-4 max-w-3xl pt-16">
        {" "}
        {/* Added pt-16 (padding-top: 4rem) here */}
        <h1 className="text-4xl font-bold text-center mb-8">{course.title}</h1>
        <p className="text-gray-400 text-lg text-center mb-10">
          {course.description}
        </p>
        <div className="mt-8">
          {course.sections.map((section, index) => (
            <CourseSectionAccordion
              key={index}
              section={section}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
