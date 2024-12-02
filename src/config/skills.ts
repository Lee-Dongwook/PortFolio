/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icons } from "@/components/atoms/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description:
      "React를 사용하여 재사용 가능한 컴포넌트 기반 UI를 설계하고, 효율적인 상태 관리와 동적인 사용자 경험을 구현할 수 있습니다.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Next.js를 활용하여 SEO 최적화, 서버 사이드 렌더링, 정적 사이트 생성 기능을 갖춘 웹 애플리케이션을 개발할 수 있습니다.",
    rating: 3,
    icon: Icons.nextjs,
  },
  {
    name: "JavaScript",
    description:
      "JavaScript를 활용하여 동적인 웹 기능을 구현하고, 비동기 처리와 DOM 조작을 통해 사용자 친화적인 인터페이스를 개발할 수 있습니다.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "TypeScript",
    description:
      "TypeScript를 활용하여 정적 타입 체크를 통해 코드 안정성을 높이고, 유지 보수와 협업이 용이한 코드를 작성할 수 있습니다.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Redux",
    description:
      "Redux를 활용하여 애플리케이션의 상태를 중앙에서 효율적으로 관리하고 상태 변경 로직을 체계적으로 유지할 수 있습니다.",
    rating: 3,
    icon: Icons.redux,
  },
  {
    name: "React Query",
    description:
      "React Query를 활용하여 서버 상태를 효과적으로 관리하고, 데이터 패칭, 캐싱, 동기화를 최적화하여 사용자 경험을 향상시킬 수 있습니다.",
    rating: 3,
    icon: Icons.sun,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
