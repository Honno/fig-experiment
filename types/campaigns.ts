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

export type Campaign = ActiveCampaign | FailedCampaign | IndevCampaign | ReleasedCampaign | BuyoutCampaign

/* Campaigns */

interface CampaignBase {
    slug: string;
    name: string;
    company?: Company;
    people: Person[];

    campaign_hashtag?: string;
    social: Social;

    sec_doc?: URL;
    antipated_release: ReleaseDate;
}

export interface ActiveCampaign extends CampaignBase {
}

export interface FailedCampaign extends CampaignBase {
}

export interface IndevCampaign extends CampaignBase {
}

export interface ReleasedCampaign extends CampaignBase {
    dividens: Payout[];
}

export interface BuyoutCampaign extends CampaignBase {
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
