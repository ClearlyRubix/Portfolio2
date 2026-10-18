export interface ExperienceItemT {
  id: number;
  title: string;
  company: string;
  companyURL?: string;
  timeType: string;
  startMonth: number;
  startYear: number;
  endMonth?: number | null;
  endYear?: number | null;
  city: string;
  locationType: string;
}

export type ExperiencesT = ExperienceItemT[];
