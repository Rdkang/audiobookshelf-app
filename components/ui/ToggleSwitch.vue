<template>
  <div>
    <div class="border-2 rounded-full flex items-center cursor-pointer w-12 h-7 justify-start material-you-transition p-0.5" :class="className" @click.stop="clickToggle">
      <span class="rounded-full w-5 h-5 shadow-elevation-1 transform transition-transform duration-200 material-you-transition" :class="switchClassName"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    onColor: {
      type: String,
      default: 'success'
    },
    offColor: {
      type: String,
      default: 'primary'
    },
    disabled: Boolean
  },
  computed: {
    toggleValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    className() {
      if (this.toggleValue) {
        return this.disabled ? 'bg-md-sys-color-primary border-md-sys-color-primary cursor-not-allowed opacity-38' : 'bg-md-sys-color-primary border-md-sys-color-primary'
      } else {
        return this.disabled ? 'bg-md-sys-color-surface-variant border-md-sys-color-outline cursor-not-allowed opacity-38' : 'bg-md-sys-color-surface-variant border-md-sys-color-outline'
      }
    },
    switchClassName() {
      var bgColor = this.toggleValue ? 'bg-md-sys-color-on-primary' : 'bg-md-sys-color-outline'
      if (this.disabled) {
        bgColor = this.toggleValue ? 'bg-md-sys-color-surface' : 'bg-md-sys-color-on-surface'
      }
      return this.toggleValue ? 'translate-x-5 ' + bgColor : bgColor
    }
  },
  methods: {
    clickToggle() {
      if (this.disabled) return
      this.toggleValue = !this.toggleValue
    }
  }
}
</script>
