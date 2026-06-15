export interface Education {
  school: string;
  major: string;
  startDate: Date;
  endDate?: Date;
  note?: string;
}

export interface Certification {
  name: string;
  issuedDate: Date;
  issuer?: string;
}

export interface OssContribution {
  title: string;
  url: string;
}

export interface CredentialsContent {
  educations: Education[];
  certifications: Certification[];
  ossContributions: OssContribution[];
}
