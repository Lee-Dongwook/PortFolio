export interface Principle {
  title: string;
  body: string;
}

export interface PhilosophyContent {
  principles: Principle[];
  idealTeammates: string[];
  aspiration: string;
}
