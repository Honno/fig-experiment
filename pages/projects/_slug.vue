<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <h1 class="title">{{ campaign.name }}</h1>
      </div>
      <div class="column has-text-right-desktop" style="margin-top: auto">
        <span class="subtitle is-4">Status: In-development</span>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <p>{{ campaign.description }}</p>
      </div>
      <div class="column">
        <h2>People involved</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ route, store, error }) {
    let slug = route.params.slug;
    let campaigns = store.getters.getCampaignsList;
    let campaign = campaigns.find(campaign => campaign.slug == slug);

    if (typeof campaign != "undefined") {
      return { campaign: campaign };
    } else {
      error({ statusCode: 404, message: "Project does not exist" });
    }
  }
};
</script>
