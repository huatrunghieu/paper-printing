<template>
  <v-app class="app">
    <paper-printing/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PaperPrinting from '@/views/PaperPrinting.vue'

export default defineComponent({
  components: { PaperPrinting },
  name: 'App'
})
</script>

<style lang="scss">

</style>
