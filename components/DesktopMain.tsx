"use client";

import React from "react";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";

const DesktopMain = () => {
  return (
    <div className="lg:flex md:flex lg:flex-row md:flex-col lg:justify-between p-4 md:gap-20 hidden">
      <DiscussionForum />
      <MarketStories />
    </div>
  );
};

export default DesktopMain;
