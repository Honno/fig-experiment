<template>
  <h1>{{ campaign.name }}</h1>
</template>

<script lang="ts">
    export default {
        async asyncData({ route, store, error }) {
            let slug = route.params.slug
            let campaigns = store.getters.getCampaignsList
            let campaign = campaigns.find(campaign => campaign.slug == slug)

            if(typeof campaign != 'undefined') {
                return { campaign: campaign }
            } else {
                error({ statusCode: 404, message: 'Project does not exist'})
            }
        }
    }
</script>
