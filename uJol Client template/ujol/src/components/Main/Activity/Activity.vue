<template>
  <div class="Activity">
    <v-tabs v-model="active" color="primary" dark slider-color="accent">
      <v-tab v-for="(item,i) in tabs" :key="i">
        {{ item.header }}
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, i) in tabs" :key="i">
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>

  </div>
</template>
<script>
  export default {
    name: 'Activity',
    data() {
      return {
        tab: null,
        active: null,
        tabs: [{
          header: 'Recent',
          content: 'Recent'
        }, {
          header: 'History',
          content: 'History'
        }]
      }
    }
  }

</script>
