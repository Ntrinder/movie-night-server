import {Episode} from "@types";

export type Show = {
    title: string,
    genres: string[],
    imdbID: string,
    imdbRating: string,
    episodes: Episode[],
}
