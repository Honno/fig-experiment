import { Company, Person } from './actors'
import { Social } from './entities'

/*  Vuex logic */

export enum CampaignTypes {
    Active = "Active",
    Failed = "Failed",
    Indev = "Indev",
    Released = "Released",
    Buyout = "Buyout"
}

/* Campaigns */

interface Campaign {
    slug: string;
    name: string;
    company?: Company;
    people: Person[];

    campaign_hashtag?: string;
    social: Social;

    sec_doc?: URL;
    antipated_release: ReleaseDate;
}

export interface ActiveCampaign extends Campaign {
}

export interface FailedCampaign extends Campaign {
}

export interface IndevCampaign extends Campaign {
}

export interface ReleasedCampaign extends Campaign {
    dividens: Payout[];
}

export interface BuyoutCampaign extends Campaign {
    buyout: Payout;
    buyout_by: Company;
}

/* Campaign items */

interface Payout {
    amount: number;
    date_issued: Date;
}

interface ReleaseDate {
    quarter: Quarter;
    year: number;
}

enum Quarter {
    Q1, Q2, Q3, Q4
}
