import { Card, CardContent } from "@/shared/ui/card";
import { Icons } from "@/shared/ui/icons";
import ChipContainer from "@/shared/ui/chip-container";
import {
  availability,
  type AvailabilityStatus,
  type EmploymentForm,
  type ContactChannel,
} from "@/entities/availability";

const statusLabel: Record<AvailabilityStatus, string> = {
  closed: "Not Open",
  open: "Open to Opportunities",
  "actively-looking": "Actively Looking",
  "side-only": "Side Projects Only",
};

const statusTone: Record<AvailabilityStatus, string> = {
  closed:
    "bg-zinc-100 text-zinc-700 ring-zinc-600/20 dark:bg-zinc-500/10 dark:text-zinc-300 dark:ring-zinc-500/20",
  open: "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-300 dark:ring-green-500/20",
  "actively-looking":
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20",
  "side-only":
    "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/20",
};

const employmentLabel: Record<EmploymentForm, string> = {
  "full-time": "Full-time",
  contract: "Contract",
  hourly: "Hourly",
  project: "Project-based",
  advisory: "Advisory",
};

const channelLabel: Record<ContactChannel, string> = {
  email: "Email",
  linkedin: "LinkedIn DM",
  form: "Inquiry Form",
};

export const ContactAvailability = () => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="mb-5 flex items-center gap-3">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${statusTone[availability.status]}`}
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-current" />
            {statusLabel[availability.status]}
          </span>
          <span className="text-xs text-muted-foreground">
            Last updated based on `career.md` §7
          </span>
        </div>

        <dl className="grid gap-x-6 gap-y-5 md:grid-cols-2">
          <div>
            <dt className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icons.briefcase className="h-4 w-4" />
              Employment Forms
            </dt>
            <dd>
              <ChipContainer
                textArray={availability.employmentForms.map(
                  (form) => employmentLabel[form],
                )}
              />
            </dd>
          </div>

          <div>
            <dt className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icons.gitOrgBuilding className="h-4 w-4" />
              Company Size
            </dt>
            <dd className="text-sm">{availability.companySize}</dd>
          </div>

          <div>
            <dt className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icons.link className="h-4 w-4" />
              Location
            </dt>
            <dd>
              <ChipContainer textArray={availability.locations} />
            </dd>
          </div>

          <div>
            <dt className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icons.calendar className="h-4 w-4" />
              Response Hours
            </dt>
            <dd className="text-sm">{availability.responseHoursKST}</dd>
          </div>

          <div className="md:col-span-2">
            <dt className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icons.star className="h-4 w-4" />
              Interest Domains
            </dt>
            <dd>
              <ChipContainer textArray={availability.interestDomains} />
            </dd>
          </div>

          <div className="md:col-span-2">
            <dt className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icons.contact className="h-4 w-4" />
              Preferred Channels
            </dt>
            <dd>
              <ChipContainer
                textArray={availability.contactChannels.map(
                  (channel) => channelLabel[channel],
                )}
              />
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
};
