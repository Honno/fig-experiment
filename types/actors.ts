import { Social } from './entities'

/* Actors */

export interface Company {
    name: string;
    games: Game[];

    social: Social;
}

export interface Person {
    name: string,
    social: Social;

    credits: Credit[];
    jobs: Job[];
}

export interface Game {
    name: string;
    social: Social;
}

/* Actor items */

interface Job {
    company: Company;
    roles: string[];

    date_start: Date;
    date_end?: Date;
}

interface Credit {
    game: Game;
    roles: string[];
}
