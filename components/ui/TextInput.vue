<template>
  <div class="relative">
    <input
      v-model="input"
      ref="input"
      autofocus
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      autocorrect="off"
      autocapitalize="none"
      autocomplete="off"
      :placeholder="placeholder"
      class="py-4 px-4 w-full outline-none material-you-transition rounded-shape-corner-extra-small border border-md-sys-color-outline bg-md-sys-color-surface text-md-sys-color-on-surface placeholder:text-md-sys-color-on-surface-variant focus:border-md-sys-color-primary focus:shadow-elevation-1 disabled:opacity-38 disabled:cursor-not-allowed"
      :class="inputClass"
      @keyup="keyup"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div v-if="prependIcon" class="absolute top-0 left-0 h-full px-3 flex items-center justify-center text-md-sys-color-on-surface-variant">
      <span class="material-symbols text-lg">{{ prependIcon }}</span>
    </div>
    <div v-if="clearable && input" class="absolute top-0 right-0 h-full px-3 flex items-center justify-center text-md-sys-color-on-surface-variant cursor-pointer hover:text-md-sys-color-primary" @click.stop="clear">
      <span class="material-symbols text-lg">close</span>
    </div>
    <div v-else-if="!clearable && appendIcon" class="absolute top-0 right-0 h-full px-3 flex items-center justify-center text-md-sys-color-on-surface-variant">
      <span class="material-symbols text-lg">{{ appendIcon }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    placeholder: String,
    type: String,
    disabled: Boolean,
    readonly: Boolean,
    borderless: Boolean,
    bg: {
      type: String,
      default: 'surface'
    },
    rounded: {
      type: String,
      default: 'shape-corner-extra-small'
    },
    prependIcon: {
      type: String,
      default: null
    },
    appendIcon: {
      type: String,
      default: null
    },
    clearable: Boolean
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    inputClass() {
      var classes = []

      if (this.prependIcon) classes.push('pl-12')
      if (this.clearable || this.appendIcon) classes.push('pr-12')

      return classes.join(' ')
    }
  },
  methods: {
    clear() {
      this.input = ''
    },
    focus() {
      if (this.$refs.input) {
        this.$refs.input.focus()
        this.$refs.input.click()
      }
    },
    onFocus() {
      this.isFocused = true
      this.$emit('focus')
    },
    onBlur() {
      this.isFocused = false
      this.$emit('blur')
    },
    keyup() {
      if (this.$refs.input) {
        this.input = this.$refs.input.value
      }
    }
  },
  mounted() {}
}
</script>

<style scoped>
input[type='time']::-webkit-calendar-picker-indicator {
  filter: invert(100%);
}
html[data-theme='light'] input[type='time']::-webkit-calendar-picker-indicator {
  filter: unset;
}
</style>
