"use client";

import { Eye, Heart, MessageSquare, Share2, UserRound } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSidebar } from "./SidebarContext";

interface Post {
  user: string;
  address: string;
  time: string;
  description: string;
  likes: string;
  views: string;
  comments: string;
}

const DiscussionForum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/discussionForum.json");
        const data = await response.json();
        setPosts(data);
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
    <div className={`flex flex-col gap-10 ${isOpen ? "lg:w-1/2 ml-30 lg:relative left-44": "lg:w-2/3 md:w-full"}`}>
      <p className="lg:block md:block bg-[#f4f4f4] text-[#c94c57] p-2 text-xl font-bold w-fit hidden">
        DISCUSSION FORUM
      </p>
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex flex-wrap flex-col gap-3 p-3 shadow-black shadow-md hover:shadow-[#2757a2]"
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3 items-center">
              <UserRound className="bg-[#784c32] rounded-full p-1" size={30} />
              <p className="text-lg font-semibold">{post.user}</p>
              <p className="bg-[#2757a2] text-white px-2 rounded-3xl">
                {post.address}
              </p>
            </div>
            <div className="text-[#7597c5] font-semibold">{post.time}</div>
          </div>
          <div className="ml-8">{post.description}</div>
          <div className="flex flex-row lg:gap-10 md:gap-2 items-center justify-between">
            <div className="flex flex-row items-center gap-1 ml-8">
              <Heart size={20} />
              <p className="lg:text-base md:text-sm">{post.likes}</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Eye size={20} />
              <p className="lg:text-base md:text-sm">{post.views}</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <MessageSquare size={20} />
              <p className="lg:text-base md:text-sm">
                {post.comments} comments
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Share2 size={20} />
              <p className="lg:text-base md:text-sm">Share</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionForum;
