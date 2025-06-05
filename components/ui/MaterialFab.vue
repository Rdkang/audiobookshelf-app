<template>
  <button
    :class="[
      'material-you-fab',
      'material-you-transition',
      'material-you-state-layer',
      'flex items-center justify-center',
      'shadow-elevation-3 hover:shadow-elevation-4',
      'rounded-shape-corner-large',
      size === 'small' ? 'h-10 w-10' : size === 'medium' ? 'h-14 w-14' : size === 'large' ? 'h-24 w-24' : 'h-14 w-14',
      variant === 'primary'
        ? 'bg-md-sys-color-primary-container text-md-sys-color-on-primary-container'
        : variant === 'secondary'
        ? 'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container'
        : variant === 'tertiary'
        ? 'bg-md-sys-color-tertiary-container text-md-sys-color-on-tertiary-container'
        : variant === 'surface'
        ? 'bg-md-sys-color-surface-container-high text-md-sys-color-primary'
        : 'bg-md-sys-color-primary-container text-md-sys-color-on-primary-container',
      disabled && 'opacity-38 cursor-not-allowed',
      extended && 'px-4'
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="material-symbols" :class="[size === 'small' ? 'text-lg' : size === 'medium' ? 'text-2xl' : size === 'large' ? 'text-4xl' : 'text-2xl', extended && hasSlot && 'mr-2']">{{ icon }}</span>
    <slot v-if="extended" />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'tertiary', 'surface'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    extended: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped>
.material-you-fab {
  transition: all 150ms cubic-bezier(0.2, 0, 0, 1);
}

.material-you-fab:hover {
  transform: translateY(-2px);
}

.material-you-fab:active {
  transform: translateY(0);
}
</style>
