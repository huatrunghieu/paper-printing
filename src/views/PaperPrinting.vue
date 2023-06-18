<template>
  <v-layout class="pa-4">
    <v-main class="main-view h-100">
      <v-row no-gutters class="h-100">
        <v-col cols="2">
          <v-card class="wrap-left pa-4 h-100">
            <div class="content" no-gutters>
              <div>
                <div><h3>Select paper size</h3></div>
                <v-select
                    v-model="paper_size"
                    :items="sizes"
                    solo
                    label="Select paper size"
                    class="mt-10"
                ></v-select>
              </div>
              <div>
                <v-row no-gutters justify="end">
                  <v-btn @click="loadItems">Apply</v-btn>
                </v-row>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="wrap-right ml-6 pa-4 h-100">
            <v-row no-gutters class="mb-4"><h3>Price table</h3></v-row>
            <paper-table
                :key="renderKey"
                :prices="prices"
                :displayFullRow="displayFullRow"
                @onSelectCells="onSelectCells"
            ></paper-table>
            <v-row v-if="prices.length > 5 && !displayFullRow" no-gutters class="pt-4" justify="end">
              <v-btn @click="() => displayFullRow = true">Show more</v-btn>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
    <v-footer app class="mt-6">
      <v-card class="w-100 pa-6">
        <v-row no-gutters justify="end">
          <div>
            <span class="mr-4">Order price: ¥{{currencyFormatPrice}}</span>
            <v-btn>Cart</v-btn>
          </div>
        </v-row>
      </v-card>
    </v-footer>
  </v-layout>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import axios from 'axios'
import PaperTable from '@/components/PaperTable.vue'
import { currencyFormat } from '@/utils/currency'

export default defineComponent({
  components: { PaperTable },
  data () {
    return {
      paper_size: 'A4',
      sizes: ['A4', 'A5', 'B4', 'B5'],
      prices: [],
      renderKey: false,
      displayFullRow: false,
      selectedPrices: []
    }
  },
  computed: {
    totalPrice () {
      return this.selectedPrices.reduce((sum, cur) => sum + (cur.price || 0), 0)
    },
    currencyFormatPrice () {
      return currencyFormat(this.totalPrice)
    }
  },
  methods: {
    refreshPage () {
      this.renderKey = !this.renderKey
      this.selectedPrices = []
    },
    async loadItems () {
      this.refreshPage()
      axios.get('https://us-central1-fe-ws-test.cloudfunctions.net/prices', {
        params: { paper_size: this.paper_size }
      }).then(resp => {
        this.prices = resp?.data?.prices || []
      })
    },
    onSelectCells (prices) {
      this.selectedPrices = prices
    }
  }
})
</script>
<style lang="scss">
.main-view{
  .wrap-left {
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
}
</style>
