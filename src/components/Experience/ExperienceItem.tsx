import { List, ListItem, Typography } from "@mui/material";

import type { ExperienceItemT } from "./Experience.types";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const ExperienceItem = ({
  id,
  title,
  company,
  timeType,
  startMonth,
  startYear,
  endMonth: rawEndMonth,
  endYear: rawEndYear,
  city,
  locationType,
}: ExperienceItemT) => {
  let startMonthWord;
  let endMonthWord;
  let durationYears;
  let durationMonths;
  let durationText;

  const endMonth = rawEndMonth ?? undefined;
  const endYear = rawEndYear ?? undefined;

  if (1 <= startMonth && startMonth <= 12) {
    startMonthWord = months[startMonth - 1];
  } else {
    startMonthWord = startMonth.toString();
  }
  if (endMonth === undefined) {
    endMonthWord = "Present";
  } else if (1 <= endMonth && endMonth <= 12) {
    endMonthWord = months[endMonth - 1];
  } else {
    endMonthWord = endMonth.toString();
  }

  if (endMonth === undefined || endYear === undefined) {
    durationYears = new Date().getUTCFullYear() - startYear;
    durationMonths = new Date().getUTCMonth() - startMonth + 1;
  } else {
    durationYears = endYear - startYear;
    durationMonths = endMonth - startMonth + 1;
    if (durationMonths == 12) {
      durationYears += 1;
      durationMonths -= 12;
    }
  }

  if (durationYears == 0)
    durationText = `${durationMonths}mo${durationMonths > 1 ? "s" : ""}`;
  else if (durationMonths == 0)
    durationText = `${durationYears}yr${durationYears > 1 ? "s" : ""}`;
  else
    durationText = `${durationYears}yr${durationYears > 1 ? "s" : ""} ${durationMonths}mo${durationMonths > 1 ? "s" : ""}`;

  return (
    <ListItem key={id}>
      <List>
        <ListItem
          key="title"
          component={Typography}
          variant="h6"
          disablePadding
        >
          {title}
        </ListItem>
        <ListItem
          key="company"
          component={Typography}
          variant="subtitle1"
          disablePadding
        >
          {company} - {timeType}
        </ListItem>
        <ListItem
          key="time"
          component={Typography}
          variant="caption"
          disablePadding
        >
          {startMonthWord} {startYear} -{" "}
          {endMonthWord === "Present" || endYear === null
            ? "Present"
            : `${endMonthWord} ${endYear}`}{" "}
          · {durationText}
        </ListItem>
        <ListItem
          key="location"
          component={Typography}
          variant="caption"
          disablePadding
        >
          {city} - {locationType}
        </ListItem>
      </List>
    </ListItem>
  );
};
