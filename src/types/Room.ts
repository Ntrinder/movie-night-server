import {Recommendation, User} from "@types";

export type Room = {
    id: number;
    code: string;
    name: string;
    recommendations: Recommendation[];
    users: User[];
}