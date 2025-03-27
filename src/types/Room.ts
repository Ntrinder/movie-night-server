import {Show, Movie} from "@types";

export type Room = {
    id: string;
    name: string;
    recommendations: (Movie | Show) []
}