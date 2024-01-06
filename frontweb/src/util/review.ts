import { User } from "type/user"


export type Review = {
    id: number,
    text: string,
    movieId: number,
    user: User
}