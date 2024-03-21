"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSidebar } from "./SidebarContext";

interface Story {
  img: string;
  title: string;
  description: string;
}

const MarketStories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/marketStories.json");
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const { isOpen, handleTrigger } = useSidebar();
  const toggleSidebar = () => {
    handleTrigger();
  };
  return (
    <div className={`lg:flex lg:flex-col lg:gap-10 lg:w-1/2 ${isOpen ? "lg:relative left-28": ""}`}>
      <p className="lg:block md:block bg-[#f4f4f4] text-[#c94c57] p-2 text-xl font-bold w-fit md:mb-10 lg:mb-0 hidden">
        MARKET STORIES
      </p>
      <div className="lg:flex lg:flex-col md:grid md:grid-cols-2 flex flex-col gap-10">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex flex-col border border-slate-200 lg:w-2/3 w-full"
          >
            <Image
              src="/img/sunset2.jpg"
              alt="Sunset"
              height={20}
              width={240}
              className="lg:w-fit w-full"
            />
            <div className="flex flex-col w-full gap-1 p-4">
              <p className="lg:text-lg md:text-xl text-base font-semibold">
                {story.title}
              </p>
              <p className="lg:text-xs md:text-base text-sm">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
