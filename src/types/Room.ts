import {Recommendation, User} from "@types";

export type Room = {
    id: number;
    name: string;
    recommendations: Recommendation[];
    users: User[];
}