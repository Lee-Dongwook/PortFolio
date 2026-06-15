import PageContainer from "@/shared/ui/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Icons } from "@/shared/ui/icons";
import { philosophy } from "@/entities/philosophy";
import { pagesConfig } from "@/shared/config/pages";

export const EngineeringPhilosophy = () => {
  return (
    <PageContainer
      title={pagesConfig.about.title}
      description={pagesConfig.about.description}
    >
      <div className="mx-auto my-4 flex max-w-5xl flex-col gap-10">
        <section aria-labelledby="principles-heading">
          <div className="mb-4 flex items-center gap-2">
            <Icons.code className="h-5 w-5 text-primary" />
            <h2
              id="principles-heading"
              className="font-heading text-2xl leading-tight lg:text-3xl"
            >
              Principles
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {philosophy.principles.map((principle, index) => (
              <Card key={principle.title} className="h-full">
                <CardHeader>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardTitle className="text-lg leading-snug">
                      {principle.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="teammates-heading">
          <div className="mb-4 flex items-center gap-2">
            <Icons.user className="h-5 w-5 text-primary" />
            <h2
              id="teammates-heading"
              className="font-heading text-2xl leading-tight lg:text-3xl"
            >
              Ideal Teammates
            </h2>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {philosophy.idealTeammates.map((line, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-card-foreground"
              >
                <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="aspiration-heading">
          <div className="mb-4 flex items-center gap-2">
            <Icons.arrowRight className="h-5 w-5 text-primary" />
            <h2
              id="aspiration-heading"
              className="font-heading text-2xl leading-tight lg:text-3xl"
            >
              Where I&apos;m Headed
            </h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed">{philosophy.aspiration}</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageContainer>
  );
};
