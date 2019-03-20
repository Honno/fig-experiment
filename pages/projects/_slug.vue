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
        <h2 class="title is-4">Dossier</h2>
        <div v-if="campaign.company">
          <h3>{{ campaign.company }}</h3>
        </div>
        <PersonInfo v-for="person in campaign.people" :key="person.name" :person="person"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PersonInfo from "~/components/person.vue";

@Component({ components: { PersonInfo } })
export default class extends Vue {
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
