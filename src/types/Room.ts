import {Recommendation} from "@types";

export type Room = {
    id: string;
    name: string;
    recommendations: Recommendation[]
}