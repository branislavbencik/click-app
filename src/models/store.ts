export interface StoreState {
  teams: Team[];
  sessions: Session[];
  your_clicks: number | undefined;
  team_clicks: number | undefined;
}

interface Team {
  order: number | undefined;
  team: string;
  clicks: number | undefined;
}

interface Session {
  team: string;
  string: string;
}
