"use client";

import React from "react";

import { experienceItems } from "@/data/index";
import { Timeline } from "@/components/ui/timeline";
export const TimelineExperience = () => {
  return (
    <div className="w-full h-full py-20">
      <Timeline data={experienceItems} />
    </div>
  );
};
