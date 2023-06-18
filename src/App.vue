<template>
  <v-app class="app">
    <paper-printing/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDisplay } from 'vuetify'
import PaperPrinting from '@/views/PaperPrinting.vue'

export default defineComponent({
  components: { PaperPrinting },
  setup () {
    const { name } = useDisplay()

    const cvWidth = computed(() => {
      switch (name.value) {
        default: return '80vw'
      }
    })

    const leftPanel = computed(() => {
      switch (name.value) {
        default: return '20vw'
      }
    })

    return { cvWidth, leftPanel }
  },
  name: 'App'
})
</script>

<style lang="scss">

</style>
