import { List, Typography } from "@mui/material";

import type { ExperienceItemT, ExperiencesT } from "./Experience.types";

import workExperienceData from "./workExperience.json" with { type: "json" };
import { ExperienceItem } from "./ExperienceItem";
const workExperience = workExperienceData as ExperiencesT;

export const WorkExperienceSection = () => {
  // replace null with undefined since these will both mean present
  let sortedWorkExperience = workExperience.map((obj: ExperienceItemT) => {
    const { endMonth, endYear, ...rest } = obj;

    return {
      ...rest,
      endMonth: endMonth ?? undefined,
      endYear: endYear ?? undefined,
    };
  });

  // sort work experience in chronological order with present/recent experience being at the top
  sortedWorkExperience = sortedWorkExperience.toSorted((a, b) => {
    if (a.endYear === undefined && b.endYear !== undefined) return -1;
    else if (a.endYear !== undefined && b.endYear === undefined) return 1;
    else if (a.endYear === undefined && b.endYear === undefined) {
      if (a.endMonth === undefined && b.endMonth !== undefined) return -1;
      if (a.endMonth !== undefined && b.endMonth === undefined) return 1;
      if (a.endMonth === undefined && b.endMonth === undefined) return 0;
    }

    if (a.endMonth === undefined && b.endMonth !== undefined) return -1;
    else if (a.endMonth !== undefined && b.endMonth === undefined) return 1;
    else if (a.endYear === undefined && b.endYear === undefined) return 0;

    const startYearCompare = b.startYear - a.startYear;
    if (startYearCompare !== 0) return startYearCompare;

    if (a.endYear !== undefined && b.endYear !== undefined) {
      const endYearCompare = b.endYear - a.endYear;
      if (endYearCompare !== 0) return endYearCompare;
    }

    const startMonthCompare = b.startMonth - a.startMonth;
    if (startMonthCompare !== 0) return startMonthCompare;

    if (a.endMonth !== undefined && b.endMonth !== undefined) {
      const endMonthCompare = b.endMonth - a.endMonth;
      if (endMonthCompare !== 0) return endMonthCompare;
    }

    return 0;
  });

  return (
    <>
      <Typography variant="h1">Experience</Typography>
      <List>
        {sortedWorkExperience.map((item) => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </List>
    </>
  );
};
