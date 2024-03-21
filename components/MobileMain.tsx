"use client";

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";

const MobileMain = () => {
  return (
    <div className="lg:hidden md:hidden block w-full">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-10 grid w-full grid-cols-2">
          <TabsTrigger className="text-white bg-[#1f3a61]" value="account">Discussion Forum</TabsTrigger>
          <TabsTrigger className="text-white bg-[#1f3a61]" value="password">Market Stories</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="px-4">
          <DiscussionForum />
        </TabsContent>
        <TabsContent value="password" className="px-4">
          <MarketStories />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MobileMain;
