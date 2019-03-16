import { RootState } from "~/types"
import { CampaignTypes, IndevCampaign } from "~/types/campaigns"
import { MutationTree, ActionTree } from "vuex"

import indev_campaigns_data from "~/static/campaigns/indev.json"

export const state = (): RootState => ({
    campaigns: {}
})

export const mutations: MutationTree<RootState> = {
    setCampaigns(state: RootState, campaigns_to_add: [ string, [] ]): void {
        state.campaigns[campaigns_to_add[0]] = campaigns_to_add[1]
    }
}

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit }) {
        let indev_campaigns: IndevCampaign[] = []
        indev_campaigns = indev_campaigns_data
        commit("setCampaigns", [CampaignTypes.Indev, indev_campaigns]);
    }
}
