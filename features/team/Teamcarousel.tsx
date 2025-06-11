"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Cody Martins",
    role: "Director",
    img: "/teamimage.jpg",
  },
  {
    name: "Gemma Fench",
    role: "Project Manager",
    img: "/teamimage.jpg",
  },
  {
    name: "Micah Sauls",
    role: "Developer",
    img: "/teamimage.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    img: "/teamimage.jpg",
  },
  {
    name: "Bob Williams",
    role: "Marketer",
    img: "/teamimage.jpg",
  },
  {
    name: "Charlie Brown",
    role: "QA Engineer",
    img: "/teamimage.jpg",
  },
];

export function TeamCarousel() {
  return (
    <Carousel
      className=" w-full md:w-[90%] lg:w-[80%] px-16"
    >
      <CarouselContent className="">
        {teamMembers.map((member, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-3">
              <Card className="bg-[#00182DCC] border border-[#202E42] text-white rounded-lg overflow-hidden">
                <CardContent className="flex flex-col items-start justify-center ">
                  <div className="w-full h-full mb-4 ">
                    <img
                      src={member.img}
                      className=" w-full h-full object-cover grayscale rounded-lg"
                    />
                  </div>
                  <span className="text-xl font-semibold text-left mb-1">{member.name}</span>
                  <span className="text-sm text-[#00B4FD] text-left">{member.role}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-gray-800 text-white rounded-full size-10 shadow-lg hover:bg-gray-700 hover:text-white transition-colors" />
      <CarouselNext className="right-4 bg-gray-800 text-white rounded-full size-10 shadow-lg hover:bg-gray-700 hover:text-white transition-colors" />
    </Carousel>
  )
}