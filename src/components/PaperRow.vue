<template>
  <v-row class="paper-row" no-gutters justify="space-between">
    <paper-cell
        v-for="(cell , index) in cells"
        :key="index" :populateWith="cell"
        :width="100 / ((this.cells || []).length || 1) + '%'"
        :highlightCells="highlightCells"
        @onSelectCell="onSelectCell"
        @onRemoveCell="onRemoveCell"
        @onMouseHover="onCellHover"
        @onMouseLeave="onCellLeave"
    />
  </v-row>
</template>

<script lang="js">
import PaperCell from '@/components/PaperCell.vue'
export default {
  components: { PaperCell },
  data () {
    return {
      selectCells: []
    }
  },
  methods: {
    onSelectCell (cell) {
      this.selectCells.push(cell)
      this.$emit('onSelectCells', this.rowIndex, this.selectCells)
    },
    onRemoveCell (cell) {
      this.selectCells = this.selectCells.filter(item => item !== cell)
      this.$emit('onSelectCells', this.rowIndex, this.selectCells)
    },
    onCellHover (cell) {
      this.$emit('onCellHover', cell)
    },
    onCellLeave (cell) {
      this.$emit('onCellLeave', cell)
    }
  },
  props: {
    rowIndex: {},
    cells: {
      default: []
    },
    highlightCells: {
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.paper-row {

}
</style>
