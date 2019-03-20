<template>
  <div>
    <h3>{{ person.name }}</h3>
    <div v-if="person.jobs.length">
      <h4>Jobs</h4>
      <div class="columns" v-for="job in person.jobs" :key="job.company.name">
        <div class="column">
          <span class="title">{{ job.company }}</span>
        </div>
        <div class="column has-text-right-desktop">
          <span v-if="job.date_ended">{{ job.date_started }}&mdash;{{ job.date_ended }}</span>
          <span v-else>{{ job.date_started }}&mdash;</span>
        </div>
        <span class="subtitle">
          <span v-for="(role, index) in job.roles" :key="index">
            <span>{{ role }}</span>
            <span v-html="rawHtml" v-if="index+1 < lists.length">,&#160;</span>
          </span>
        </span>
      </div>
    </div>
    <div v-if="person.credits.length">
      <h4>Credits</h4>
      <div class="columns" v-for="credit in person.credits" :key="credit.game.name">
        <div class="column">
          <span class="title">{{ credit.game.name }}</span>
        </div>
        <div class="column" style="margin-top: auto">
          <span v-for="(role, index) in credit.roles" :key="index">
            <span>{{ role }}</span>
            <span v-html="rawHtml" v-if="index+1 < lists.length">,&#160;</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Person } from "~/types/actors";

@Component({})
export default class PersonInfo extends Vue {
  @Prop() person: Person;
}
</script>