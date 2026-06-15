import type { CredentialsContent } from "@/entities/credentials/model/types";

export const credentials: CredentialsContent = {
  educations: [
    {
      school: "홍익대학교",
      major: "정보컴퓨터공학부 컴퓨터공학전공",
      startDate: new Date("2018-03-01"),
      endDate: new Date("2024-08-01"),
      note: "졸업",
    },
  ],
  certifications: [
    { name: "정보처리기사", issuedDate: new Date("2023-09-01") },
    { name: "SQLD", issuedDate: new Date("2023-04-01") },
    { name: "리눅스마스터 2급", issuedDate: new Date("2022-09-01") },
  ],
  ossContributions: [
    {
      title: "meursyphus/headless-chart#12",
      url: "https://github.com/meursyphus/headless-chart/pull/12",
    },
  ],
};
