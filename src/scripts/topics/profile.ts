export interface IProfile {
  username: string;
  email: string;
  age?: number;
  bio?: string;
}

export const profile: IProfile = {
  username: "rakeshmondal",
  email: "rakesh@example.com",
};
