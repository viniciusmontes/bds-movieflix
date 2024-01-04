
export type Role = "VISITOR" | "MEMBER";

export type TokeData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};
