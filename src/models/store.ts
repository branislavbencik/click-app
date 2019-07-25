export interface StoreState {
  teams: Team[];
  sessions: Session[];
  your_clicks: number | undefined;
  team_clicks: number | undefined;
}

export interface Clicks {
  your_clicks: number | undefined;
  team_clicks: number | undefined;
}

export interface Team {
  order: number | undefined;
  team: string;
  clicks: number | undefined;
}

export interface Session {
  team: string;
  string: string;
}
