import { RootState } from "~/types"
import { CampaignTypes, Campaigns } from "~/types/campaigns"
import { GetterTree, MutationTree, ActionTree } from "vuex"

import indev_campaigns_data from "~/static/campaigns/indev.json"

export const state = (): RootState => ({
    campaigns: new Map<CampaignTypes, Campaigns>()
})

export const getters: GetterTree<RootState, RootState> = {
    getCampaignsList(state: RootState): Array<Campaigns> {
        let flat_campaigns_list = []
        for(var key in state.campaigns) {
            flat_campaigns_list = flat_campaigns_list.concat(state.campaigns[key])
        }

        return flat_campaigns_list
    }
}

export const mutations: MutationTree<RootState> = {
    setCampaigns(state: RootState, campaigns_to_add: [ string, [] ]): void {
        state.campaigns[campaigns_to_add[0]] = campaigns_to_add[1]
    }
}

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit }) {
        let indev_campaigns: Campaigns[] = []
        indev_campaigns = indev_campaigns_data
        commit("setCampaigns", [CampaignTypes.Indev, indev_campaigns]);
    }

}
