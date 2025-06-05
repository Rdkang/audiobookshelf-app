<template>
  <textarea
    ref="input"
    v-model="inputValue"
    :rows="rows"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    class="py-3 px-4 rounded-shape-corner-extra-small bg-md-sys-color-surface border border-md-sys-color-outline text-md-sys-color-on-surface placeholder:text-md-sys-color-on-surface-variant focus:outline-none focus:border-md-sys-color-primary focus:shadow-elevation-1 disabled:opacity-38 disabled:cursor-not-allowed material-you-transition resize-none"
    :class="transparent ? 'border-transparent bg-transparent' : ''"
    @change="change"
  />
</template>

<script>
export default {
  props: {
    value: [String, Number],
    placeholder: String,
    readonly: Boolean,
    rows: {
      type: Number,
      default: 2
    },
    transparent: Boolean,
    disabled: Boolean
  },
  data() {
    return {}
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    change(e) {
      this.$emit('change', e.target.value)
    },
    blur() {
      if (this.$refs.input && this.$refs.input.blur) {
        this.$refs.input.blur()
      }
    }
  },
  mounted() {}
}
</script>

<style scoped>
textarea {
  border-style: solid !important;
}
textarea:read-only {
  color: var(--md-sys-color-on-surface-variant);
  background-color: var(--md-sys-color-surface-variant);
  cursor: default;
}
textarea:disabled {
  background-color: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface);
}
</style>
