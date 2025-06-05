<template>
  <button class="icon-btn rounded-shape-corner-small flex items-center justify-center h-10 w-10 relative material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12" :disabled="disabled || loading" :class="className" :type="type" @mousedown.prevent @click="clickBtn">
    <div v-if="loading" class="text-md-sys-color-on-surface absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <svg class="animate-spin" style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
      </svg>
    </div>
    <span v-else class="material-symbols text-2xl text-md-sys-color-on-surface" :class="{ fill: !outlined }" :style="{ fontSize }">{{ icon }}</span>
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    bgColor: {
      type: String,
      default: 'primary'
    },
    outlined: Boolean,
    borderless: Boolean,
    loading: Boolean
  },
  data() {
    return {}
  },
  computed: {
    className() {
      var classes = []
      if (!this.borderless) {
        classes.push('bg-md-sys-color-surface-container border border-md-sys-color-outline')
      }
      if (this.disabled) {
        classes.push('cursor-not-allowed opacity-38')
      }
      return classes.join(' ')
    },
    fontSize() {
      if (this.icon === 'edit') return '1.25rem'
      return '1.4rem'
    }
  },
  methods: {
    clickBtn(e) {
      if (this.disabled || this.loading) {
        e.preventDefault()
        return
      }
      e.preventDefault()
      this.$emit('click')
      e.stopPropagation()
    }
  },
  mounted() {}
}
</script>

<style>
button.icon-btn:disabled {
  cursor: not-allowed;
}
button.icon-btn::before {
  content: '';
  position: absolute;
  border-radius: 6px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.1s ease-in-out;
}
button.icon-btn:hover:not(:disabled)::before {
  background-color: rgba(255, 255, 255, 0.1);
}
button.icon-btn:disabled::before {
  background-color: rgba(0, 0, 0, 0.2);
}
button.icon-btn:disabled span {
  color: #777;
}
</style>
