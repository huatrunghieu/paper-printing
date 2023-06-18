<template>
  <paper-row
      v-for="(cells, index) in rows"
      :rowIndex="index"
      :key="index" :cells="cells"
      :highlightCells="highlightCells[index] || []"
      @onSelectCells="onSelectCells"
      @onCellHover="onCellHover"
      @onCellLeave="onCellLeave"
  ></paper-row>
</template>

<script lang="js">
import PaperRow from '@/components/PaperRow.vue'
export default {
  components: { PaperRow },
  data () {
    return {
      selectedCells: {},
      hoverCell: {}
    }
  },
  computed: {
    rows () {
      return this.displayFullRow ? this.prices : this.prices.slice(0, 5)
    },
    highlightCells () {
      if (!this.hoverCell) return {}

      const rowHover = this.prices.find(row => row.some(cell => cell === this.hoverCell))
      if (!rowHover) return {}

      const colHoverIndex = rowHover.indexOf(this.hoverCell)
      const rowHoverIndex = this.prices.indexOf(rowHover)

      // Loop through row and col to find the highlight cells
      // The highlight cells should match rowIndex or colIndex of the hover cell
      const highlightCells = this.prices.reduce((rntRows, curRow, rowIndex) => {
        return (curRow || []).reduce((_rntRows, curCol, colIndex) => {
          const isMatchHighlightCondition = colHoverIndex === colIndex || rowHoverIndex === rowIndex
          const rows = _rntRows[rowIndex] || []
          return {
            ..._rntRows,
            [rowIndex]: isMatchHighlightCondition ? [...rows, curCol] : rows
          }
        }, rntRows)
      }, {})
      return highlightCells
    }
  },
  methods: {
    onSelectCells (index, val) {
      this.selectedCells = { ...this.selectedCells, [index]: val }
      const flattenCells = Object.values(this.selectedCells).reduce((pre, cur) => [...pre, ...cur], [])
      this.$emit('onSelectCells', flattenCells)
    },
    onCellHover (cell) {
      this.hoverCell = cell
    },
    onCellLeave (cell) {
      if (this.hoverCell === cell) this.hoverCell = null
    }
  },
  props: {
    prices: {
      default: []
    },
    displayFullRow: {
      default: false
    }
  }
}
</script>
