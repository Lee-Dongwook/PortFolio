import PageContainer from "@/shared/ui/page-container";
import GithubRedirectCard from "@/shared/ui/github-redirect-card";
import { ContactForm } from "@/features/contact-form";
import { pagesConfig } from "@/shared/config/pages";

export const ContactSection = () => {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex  justify-center">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
};
