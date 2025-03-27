import {Movie, Show, User} from "@types";

export type Recommendation = {
    item: Movie | Show,
    votes: User[],
    recommendedBy: User,
}