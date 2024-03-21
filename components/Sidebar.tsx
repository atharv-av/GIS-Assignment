"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  BellDot,
  ChevronRight,
  CircleDollarSign,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import { useSidebar } from "./SidebarContext";

export function Sidebar() {
  const { isOpen, handleTrigger } = useSidebar();
  const toggleSidebar = () => {
    handleTrigger();
  };
  const menuItems = [
    {
      label: "Discussion Forum",
      icon: MessageSquareText,
    },
    {
      label: "Market Stories",
      icon: CircleDollarSign,
    },
    {
      label: "Sentiment",
    },
    {
      label: "Market",
    },
    {
      label: "Sector",
    },
    {
      label: "Watchlist",
    },
    {
      label: "Events",
    },
    {
      label: "News/Interview",
    },
  ];
  return (
    <div className={`${isOpen ? "lg:w-1/4" : "lg:w-20 md:w-12"}`}>
      <Sheet>
        <SheetContent onInteractOutside={(e) => {e.preventDefault()}} className="bg-[#1f3a61] h-full" side="left">
          <SheetHeader className="flex flex-row items-center justify-between my-4">
            <div className="flex items-center px-2">
              <UserRound className="mr-2 text-white" />
              <p className="text-white text-lg font-medium">Hello, User</p>
            </div>
            <BellDot className="cursor-pointer text-white" />
          </SheetHeader>
          <hr />
          <div className="flex flex-col gap-4 mt-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center text-white gap-2 w-full hover:bg-[#142842] cursor-pointer py-3 px-2"
              >
                {item.icon ? <item.icon /> : <div className="w-6"></div>}
                {item.label}
              </div>
            ))}
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4" />
            </div>
          </div>
          <SheetFooter className="px-4 py-2">
            <SheetClose asChild />
          </SheetFooter>
        </SheetContent>
        <SheetTrigger asChild>
          <div
            onClick={toggleSidebar}
            className={`fixed py-10 top-[42%] left-0 transition-transform bg-[#1f3a61] cursor-pointer`}
          >
            <ChevronRight className="text-white" />
          </div>
        </SheetTrigger>
      </Sheet>
    </div>
  );
}
