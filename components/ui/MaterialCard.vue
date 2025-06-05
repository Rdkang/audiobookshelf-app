<template>
  <div
    :class="[
      'material-you-card',
      'material-you-transition',
      'material-you-state-layer',
      `rounded-${radius}`,
      `shadow-${elevation}`,
      variant === 'filled' ? 'bg-md-sys-color-surface-container-highest' : variant === 'elevated' ? 'bg-md-sys-color-surface shadow-elevation-1' : variant === 'outlined' ? 'bg-md-sys-color-surface border border-md-sys-color-outline' : 'bg-md-sys-color-surface',
      interactive && 'cursor-pointer hover:shadow-elevation-2',
      disabled && 'opacity-38 cursor-not-allowed'
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'elevated',
      validator: (value) => ['filled', 'elevated', 'outlined'].includes(value)
    },
    radius: {
      type: String,
      default: 'shape-corner-medium',
      validator: (value) => ['shape-corner-none', 'shape-corner-extra-small', 'shape-corner-small', 'shape-corner-medium', 'shape-corner-large', 'shape-corner-extra-large', 'shape-corner-full'].includes(value)
    },
    elevation: {
      type: String,
      default: 'elevation-1',
      validator: (value) => ['elevation-0', 'elevation-1', 'elevation-2', 'elevation-3', 'elevation-4', 'elevation-5'].includes(value)
    },
    interactive: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled && this.interactive) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped>
.material-you-card:hover {
  transform: translateY(-1px);
}

.material-you-card:active {
  transform: translateY(0);
}
</style>
