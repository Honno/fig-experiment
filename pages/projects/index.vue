<template>
  <div class="container">
    <h1>hiya</h1>
    <ul id="campaigns_list">
      <li v-for="campaign in campaigns" :key="campaign.slug">
        <h2><a v-bind:href="campaign.slug">{{ campaign.name }}</a></h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { queryObject } from "~/utils";

export default {
  async asyncData({ store }) {
    let campaigns = store.getters.getCampaignsList.map(campaign =>
      queryObject(campaign, ["name", "slug"])
    )

    return { campaigns: campaigns }
  }
};
</script>
