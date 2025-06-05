<template>
  <nuxt-link v-if="to" :to="to" class="btn material-you-transition material-you-state-layer outline-none rounded-shape-corner-large shadow-elevation-1 relative border-0 text-center" :disabled="disabled || loading" :class="classList">
    <slot />
    <div v-if="loading" class="text-current absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <svg class="animate-spin" style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
      </svg>
    </div>
  </nuxt-link>
  <button v-else class="btn material-you-transition material-you-state-layer outline-none rounded-shape-corner-large shadow-elevation-1 relative border-0" :disabled="disabled || loading" :type="type" :class="classList" @mousedown.prevent @click="click">
    <slot />
    <div v-if="loading" class="text-current absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <svg class="animate-spin" style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    to: String,
    color: {
      type: String,
      default: 'primary'
    },
    variant: {
      type: String,
      default: 'filled', // filled, outlined, text, tonal
      validator: (value) => ['filled', 'outlined', 'text', 'tonal'].includes(value)
    },
    type: {
      type: String,
      default: ''
    },
    paddingX: Number,
    paddingY: Number,
    small: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  data() {
    return {}
  },
  computed: {
    classList() {
      var list = []
      if (this.loading) list.push('text-opacity-0')

      // Material You button variants
      if (this.variant === 'filled') {
        if (this.color === 'primary') {
          list.push('bg-md-sys-color-primary text-md-sys-color-on-primary')
        } else if (this.color === 'secondary') {
          list.push('bg-md-sys-color-secondary text-md-sys-color-on-secondary')
        } else if (this.color === 'error') {
          list.push('bg-md-sys-color-error text-md-sys-color-on-error')
        } else {
          list.push(`bg-${this.color} text-white`)
        }
      } else if (this.variant === 'tonal') {
        if (this.color === 'primary') {
          list.push('bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container')
        } else if (this.color === 'secondary') {
          list.push('bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container')
        } else if (this.color === 'error') {
          list.push('bg-md-sys-color-error-container text-md-sys-color-on-error-container')
        }
      } else if (this.variant === 'outlined') {
        list.push('bg-transparent border border-md-sys-color-outline text-md-sys-color-primary')
      } else if (this.variant === 'text') {
        list.push('bg-transparent text-md-sys-color-primary')
      }

      if (this.small) {
        list.push('text-sm')
        if (this.paddingX === undefined) list.push('px-6')
        if (this.paddingY === undefined) list.push('py-2')
      } else {
        if (this.paddingX === undefined) list.push('px-8')
        if (this.paddingY === undefined) list.push('py-3')
      }
      if (this.paddingX !== undefined) {
        list.push(`px-${this.paddingX}`)
      }
      if (this.paddingY !== undefined) {
        list.push(`py-${this.paddingY}`)
      }
      if (this.disabled) {
        list.push('cursor-not-allowed opacity-38')
      }
      return list
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  },
  mounted() {}
}
</script>

<style>
/* Material You button styles are handled via Tailwind classes and material-you.css */
</style>
