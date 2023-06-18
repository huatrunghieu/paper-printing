<template>
  <v-tooltip text="Tooltip">
    <template v-slot:activator="{ props }">
      <div
          :class="{'paper-cell': true, 'selected': isSelected || highlightCells.some(cell => cell === populateWith)}"
          :style="{width: width}"
          v-bind="props"
          @click="onCellClick"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
      >
        <span>
          Price: {{populateWith.price || '-'}}
        </span>
      </div>
    </template>
    <div>
      <span>Business day: {{populateWith.business_day}}, Quantity: {{populateWith.quantity}}</span>
    </div>
  </v-tooltip>
</template>

<script lang="js">
export default {
  data () {
    return {
      isSelected: false
    }
  },
  methods: {
    onMouseEnter () {
      this.$emit('onMouseHover', this.populateWith)
    },
    onMouseLeave () {
      this.$emit('onMouseLeave', this.populateWith)
    },
    onCellClick () {
      this.isSelected = !this.isSelected

      if (this.isSelected) this.$emit('onSelectCell', this.populateWith)
      else this.$emit('onRemoveCell', this.populateWith)
    }
  },
  props: {
    populateWith: {
      default: {}
    },
    width: {},
    highlightCells: {
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.paper-cell {
  border: 1px solid grey;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paper-cell.selected {
  background-color: lightgrey;
}

.paper-cell:hover{
  background-color: gray;
}
</style>
