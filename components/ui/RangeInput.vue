<template>
  <div class="inline-flex items-center">
    <input v-model="input" type="range" :min="min" :max="max" :step="step" :style="{ width: inputWidth }" class="material-you-range-input" />

    <p class="text-xs ml-2 text-md-sys-color-on-surface-variant">{{ input }}%</p>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    min: Number,
    max: Number,
    step: Number,
    inputWidth: {
      type: String,
      default: 'unset'
    }
  },
  data() {
    return {}
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped>
.material-you-range-input {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.2, 0, 0, 1);
}

.material-you-range-input:focus {
  outline: none;
}

.material-you-range-input:disabled {
  cursor: not-allowed;
  opacity: 0.38;
}

/* chromium */
.material-you-range-input::-webkit-slider-runnable-track {
  background-color: var(--md-sys-color-secondary-container);
  border-radius: 9999px;
  height: 0.25rem;
  border: none;
}

.material-you-range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -0.375rem;
  border-radius: 50%;
  background-color: var(--md-sys-color-primary);
  height: 1rem;
  width: 1rem;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 150ms cubic-bezier(0.2, 0, 0, 1);
}

.material-you-range-input:hover::-webkit-slider-thumb {
  background-color: var(--md-sys-color-primary);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: scale(1.1);
}

.material-you-range-input:focus::-webkit-slider-thumb {
  background-color: var(--md-sys-color-primary);
  box-shadow: 0 0 0 2px var(--md-sys-color-primary-container);
  outline: none;
}

.material-you-range-input:active::-webkit-slider-thumb {
  transform: scale(1.2);
}

/* firefox */
.material-you-range-input::-moz-range-track {
  background-color: var(--md-sys-color-secondary-container);
  border-radius: 9999px;
  height: 0.25rem;
  border: none;
}

.material-you-range-input::-moz-range-thumb {
  border: none;
  border-radius: 50%;
  background-color: var(--md-sys-color-primary);
  height: 1rem;
  width: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 150ms cubic-bezier(0.2, 0, 0, 1);
}

.material-you-range-input:hover::-moz-range-thumb {
  background-color: var(--md-sys-color-primary);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: scale(1.1);
}

.material-you-range-input:focus::-moz-range-thumb {
  background-color: var(--md-sys-color-primary);
  box-shadow: 0 0 0 2px var(--md-sys-color-primary-container);
  outline: none;
}

.material-you-range-input:active::-moz-range-thumb {
  transform: scale(1.2);
}

.material-you-range-input:disabled::-webkit-slider-thumb,
.material-you-range-input:disabled::-moz-range-thumb {
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.38;
}

.material-you-range-input:disabled::-webkit-slider-runnable-track,
.material-you-range-input:disabled::-moz-range-track {
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.12;
}
</style>
