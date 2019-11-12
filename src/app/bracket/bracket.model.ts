export interface IBracket {
  id: number;
  name: string;
  date: Date;
  rounds: IRound[];
}

export interface IRound {
  id: number;
  name: string;
  date: Date;
  matchup: IMatchup[];
}

export interface IMatchup {
  id: number;
  user1: IUser;
  user2: IUser;
}

export interface IUser {
  id: number;
  name: string;
}
