import PageContainer from "@/components/molecules/page-container";
import GithubRedirectCard from "@/components/molecules/github-redirect-card";
import { ContactForm } from "@/components/atoms/contact-form";
import { pagesConfig } from "@/config/pages";

const ContactOrganism = () => {
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

export default ContactOrganism;
