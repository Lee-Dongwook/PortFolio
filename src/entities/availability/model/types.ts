export type AvailabilityStatus =
  | "closed"
  | "open"
  | "actively-looking"
  | "side-only";

export type EmploymentForm =
  | "full-time"
  | "contract"
  | "hourly"
  | "project"
  | "advisory";

export type ContactChannel = "email" | "linkedin" | "form";

export interface AvailabilityContent {
  status: AvailabilityStatus;
  employmentForms: EmploymentForm[];
  locations: string[];
  companySize: string;
  interestDomains: string[];
  responseHoursKST: string;
  contactChannels: ContactChannel[];
}
