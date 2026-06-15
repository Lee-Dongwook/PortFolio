import Link from "next/link";

import { Card, CardContent } from "@/shared/ui/card";
import { Icons } from "@/shared/ui/icons";
import { credentials } from "@/entities/credentials";

const formatMonthYear = (date: Date): string =>
  date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

export const Credentials = () => {
  const { educations, certifications, ossContributions } = credentials;

  return (
    <div className="mx-auto my-10 flex max-w-5xl flex-col gap-10">
      {educations.length > 0 && (
        <section aria-labelledby="education-heading">
          <div className="mb-4 flex items-center gap-2">
            <Icons.gitOrgBuilding className="h-5 w-5 text-primary" />
            <h2
              id="education-heading"
              className="font-heading text-2xl leading-tight lg:text-3xl"
            >
              Education
            </h2>
          </div>
          <div className="grid gap-4">
            {educations.map((edu) => {
              const period = `${formatMonthYear(edu.startDate)} – ${
                edu.endDate ? formatMonthYear(edu.endDate) : "Present"
              }`;
              return (
                <Card key={`${edu.school}-${edu.major}`}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.school}</h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.major}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <time dateTime={edu.startDate.toISOString()}>
                          {period}
                        </time>
                        {edu.note && (
                          <span className="ml-2 inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                            {edu.note}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {certifications.length > 0 && (
        <section aria-labelledby="certifications-heading">
          <div className="mb-4 flex items-center gap-2">
            <Icons.check className="h-5 w-5 text-primary" />
            <h2
              id="certifications-heading"
              className="font-heading text-2xl leading-tight lg:text-3xl"
            >
              Certifications
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {certifications.map((cert) => (
              <Card key={cert.name}>
                <CardContent className="flex items-center justify-between gap-3 pt-6">
                  <div className="flex items-center gap-3">
                    <Icons.star className="h-4 w-4 text-primary" />
                    <span className="font-medium">{cert.name}</span>
                  </div>
                  <time
                    dateTime={cert.issuedDate.toISOString()}
                    className="text-xs text-muted-foreground"
                  >
                    {formatMonthYear(cert.issuedDate)}
                  </time>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {ossContributions.length > 0 && (
        <section aria-labelledby="oss-heading">
          <div className="mb-4 flex items-center gap-2">
            <Icons.gitBranch className="h-5 w-5 text-primary" />
            <h2
              id="oss-heading"
              className="font-heading text-2xl leading-tight lg:text-3xl"
            >
              Open Source Contributions
            </h2>
          </div>
          <ul className="grid gap-3">
            {ossContributions.map((oss) => (
              <li key={oss.url}>
                <Link
                  href={oss.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="flex items-center gap-3">
                    <Icons.gitHub className="h-4 w-4" />
                    <span className="font-mono">{oss.title}</span>
                  </div>
                  <Icons.externalLink className="h-4 w-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
