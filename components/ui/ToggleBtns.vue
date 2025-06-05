<template>
  <div class="inline-flex toggle-btn-wrapper shadow-elevation-1 rounded-shape-corner-large overflow-hidden border border-md-sys-color-outline">
    <button v-for="(item, index) in items" :key="`${name}-${index}`" type="button" class="toggle-btn outline-none relative px-4 py-2 material-you-transition material-you-state-layer" :class="{ selected: item.value === value }" @click.stop="clickBtn(item.value)">
      {{ item.text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: [String, Number, Boolean],
    items: {
      type: Array,
      default: Object
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    clickBtn(value) {
      this.$emit('input', value)
    }
  },
  mounted() {}
}
</script>

<style scoped>
.toggle-btn-wrapper .toggle-btn:not(:last-child) {
  border-right: 1px solid var(--md-sys-color-outline);
}

.toggle-btn {
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface-variant);
  font-weight: 500;
  font-size: 0.875rem;
  min-width: 48px;
}

.toggle-btn:hover:not(.selected) {
  background-color: var(--md-sys-color-surface-container-highest);
}

.toggle-btn.selected {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  font-weight: 600;
}

.toggle-btn:focus {
  outline: 2px solid var(--md-sys-color-primary);
  outline-offset: 2px;
}

.toggle-btn:disabled {
  cursor: not-allowed;
  opacity: 0.38;
  color: var(--md-sys-color-on-surface);
}
</style>
