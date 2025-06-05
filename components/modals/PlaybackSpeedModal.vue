<template>
  <modals-modal v-model="show" @input="modalInput" :width="200" height="100%">
    <template #outer>
      <div class="absolute top-8 left-4 z-40">
        <p class="text-md-sys-color-on-surface text-2xl truncate">{{ $strings.LabelPlaybackSpeed }}</p>
      </div>
    </template>

    <div class="w-full h-full overflow-hidden absolute top-0 left-0 flex items-center justify-center">
      <div class="w-full overflow-x-hidden overflow-y-auto bg-md-sys-color-surface-container elevation-3 shape-corner-lg" style="max-height: 75%" @click.stop>
        <ul class="w-full" role="listbox" aria-labelledby="listbox-label">
          <li v-for="rate in rates" :key="rate" class="text-md-sys-color-on-surface select-none relative py-4 material-you-state-layer cursor-pointer" :class="rate === selected ? 'bg-md-sys-color-secondary-container/70' : ''" role="option" @click="clickedOption(rate)">
            <div class="flex items-center justify-center">
              <span class="font-normal block truncate text-lg">{{ rate }}x</span>
            </div>
          </li>
        </ul>
        <div class="flex items-center justify-center py-3 border-t border-md-sys-color-outline-variant/30">
          <button :disabled="!canDecrement" @click="decrement" class="material-you-btn w-10 h-10 text-md-sys-color-on-surface-variant bg-md-sys-color-surface-container-highest shape-corner-sm flex items-center justify-center material-you-state-layer">
            <span class="material-symbols text-lg">remove</span>
          </button>
          <div class="w-24 text-center mx-4">
            <p class="text-xl text-md-sys-color-on-surface">{{ playbackRate }}<span class="text-lg">⨯</span></p>
          </div>
          <button :disabled="!canIncrement" @click="increment" class="material-you-btn w-10 h-10 text-md-sys-color-on-surface-variant bg-md-sys-color-surface-container-highest shape-corner-sm flex items-center justify-center material-you-state-layer">
            <span class="material-symbols text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  </modals-modal>
</template>

<script>
export default {
  props: {
    value: Boolean,
    playbackRate: Number
  },
  data() {
    return {
      currentPlaybackRate: 0,
      MIN_SPEED: 0.5,
      MAX_SPEED: 10
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.currentPlaybackRate = this.selected
      }
    }
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    selected: {
      get() {
        return this.playbackRate
      },
      set(val) {
        this.$emit('update:playbackRate', val)
      }
    },
    rates() {
      return [0.5, 1, 1.2, 1.5, 1.7, 2, 3]
    },
    canIncrement() {
      return this.playbackRate + 0.1 <= this.MAX_SPEED
    },
    canDecrement() {
      return this.playbackRate - 0.1 >= this.MIN_SPEED
    }
  },
  methods: {
    increment() {
      if (this.selected + 0.1 > this.MAX_SPEED) return
      var newPlaybackRate = this.selected + 0.1
      this.selected = Number(newPlaybackRate.toFixed(1))
    },
    decrement() {
      if (this.selected - 0.1 < this.MIN_SPEED) return
      var newPlaybackRate = this.selected - 0.1
      this.selected = Number(newPlaybackRate.toFixed(1))
    },
    modalInput(val) {
      if (!val) {
        if (this.currentPlaybackRate !== this.selected) {
          this.$emit('change', this.selected)
        }
      }
    },
    clickedOption(rate) {
      this.selected = Number(rate)
      this.show = false
      this.$emit('change', Number(rate))
    }
  },
  mounted() {}
}
</script>

<style>
.material-you-btn:disabled {
  cursor: not-allowed;
  opacity: 0.38;
  color: rgb(from var(--md-sys-color-on-surface) r g b / 0.38) !important;
  background-color: rgb(from var(--md-sys-color-on-surface) r g b / 0.12) !important;
}

.material-you-btn:disabled .material-symbols {
  color: rgb(from var(--md-sys-color-on-surface) r g b / 0.38) !important;
}
</style>
