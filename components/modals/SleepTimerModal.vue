<template>
  <modals-modal v-model="show" :width="200" height="100%">
    <template #outer>
      <div class="absolute top-8 left-4 z-40">
        <p class="text-md-sys-color-on-surface text-2xl truncate">{{ $strings.HeaderSleepTimer }}</p>
      </div>
    </template>

    <div class="w-full h-full overflow-hidden absolute top-0 left-0 flex items-center justify-center" @click="show = false">
      <div class="w-full overflow-x-hidden overflow-y-auto bg-md-sys-color-surface-container rounded-shape-corner-extra-large elevation-3" style="max-height: 75%" @click.stop>
        <div v-if="manualTimerModal" class="p-6">
          <div class="flex mb-6 cursor-pointer material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12 rounded-full p-2 -ml-2" @click="manualTimerModal = false">
            <span class="material-symbols text-3xl text-md-sys-color-on-surface">arrow_back</span>
          </div>
          <div class="flex my-6 items-center justify-between">
            <ui-btn variant="tonal" @click="decreaseManualTimeout" class="w-12 h-12" :padding-x="0"><span class="material-symbols text-lg">remove</span></ui-btn>
            <p class="text-3xl font-mono text-center text-md-sys-color-on-surface">{{ manualTimeoutMin }} min</p>
            <ui-btn variant="tonal" @click="increaseManualTimeout" class="w-12 h-12" :padding-x="0"><span class="material-symbols text-lg">add</span></ui-btn>
          </div>
          <ui-btn variant="filled" @click="clickedOption(manualTimeoutMin)" class="w-full">{{ $strings.ButtonSetTimer }}</ui-btn>
        </div>
        <ul v-else-if="!sleepTimerRunning" class="h-full w-full" role="listbox" aria-labelledby="listbox-label">
          <li v-for="timeout in timeouts" :key="timeout" class="text-md-sys-color-on-surface select-none relative py-4 material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12 cursor-pointer" role="option" @click="clickedOption(timeout)">
            <div class="flex items-center justify-center">
              <span class="font-normal block truncate text-lg">{{ timeout }} min</span>
            </div>
          </li>
          <li v-if="currentEndOfChapterTime" class="text-md-sys-color-on-surface select-none relative py-4 material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12 cursor-pointer" role="option" @click="clickedChapterOption(timeout)">
            <div class="flex items-center justify-center">
              <span class="font-normal block truncate text-lg text-center">{{ $strings.LabelEndOfChapter }}</span>
            </div>
          </li>
          <li class="text-md-sys-color-on-surface select-none relative py-4 material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12 cursor-pointer" role="option" @click="manualTimerModal = true">
            <div class="flex items-center justify-center">
              <span class="font-normal block truncate text-lg text-center">{{ $strings.LabelCustomTime }}</span>
            </div>
          </li>
        </ul>
        <div v-else class="p-6">
          <div class="flex my-6 items-center justify-between">
            <ui-btn variant="tonal" @click="decreaseSleepTime" class="w-12 h-12" :padding-x="0"><span class="material-symbols text-lg">remove</span></ui-btn>
            <p class="text-3xl font-mono text-center text-md-sys-color-on-surface">{{ timeRemainingPretty }}</p>
            <ui-btn variant="tonal" @click="increaseSleepTime" class="w-12 h-12" :padding-x="0"><span class="material-symbols text-lg">add</span></ui-btn>
          </div>

          <ui-btn variant="outlined" @click="cancelSleepTimer" class="w-full">{{ isAuto ? $strings.ButtonDisableAutoTimer : $strings.ButtonCancelTimer }}</ui-btn>
        </div>
      </div>
    </div>
  </modals-modal>
</template>

<script>
import { Dialog } from '@capacitor/dialog'

export default {
  props: {
    value: Boolean,
    currentTime: Number,
    sleepTimerRunning: Boolean,
    currentEndOfChapterTime: Number,
    isAuto: Boolean
  },
  data() {
    return {
      manualTimerModal: false,
      manualTimeoutMin: 1
    }
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(val) {
        if (!val) {
          this.manualTimerModal = false
        }
        this.$emit('input', val)
      }
    },
    timeouts() {
      return [5, 10, 15, 30, 45, 60, 90]
    },
    timeRemainingPretty() {
      if (this.currentTime <= 0) return '0:00'
      return this.$secondsToTimestamp(this.currentTime)
    },
    isIos() {
      return this.$platform === 'ios'
    }
  },
  methods: {
    async clickedChapterOption() {
      await this.$hapticsImpact()
      this.show = false
      this.$nextTick(() => this.$emit('change', { time: this.currentEndOfChapterTime * 1000, isChapterTime: true }))
    },
    async clickedOption(timeoutMin) {
      await this.$hapticsImpact()
      const timeout = timeoutMin * 1000 * 60
      this.show = false
      this.manualTimerModal = false
      this.$nextTick(() => this.$emit('change', { time: timeout, isChapterTime: false }))
    },
    async cancelSleepTimer() {
      if (this.isAuto) {
        const { value } = await Dialog.confirm({
          title: 'Confirm',
          message: this.$strings.MessageConfirmDisableAutoTimer
        })
        if (!value) return
      }

      await this.$hapticsImpact()
      this.$emit('cancel')
      this.show = false
    },
    async increaseSleepTime() {
      await this.$hapticsImpact()
      this.$emit('increase')
    },
    async decreaseSleepTime() {
      await this.$hapticsImpact()
      this.$emit('decrease')
    },
    async increaseManualTimeout() {
      await this.$hapticsImpact()
      this.manualTimeoutMin++
    },
    async decreaseManualTimeout() {
      await this.$hapticsImpact()
      if (this.manualTimeoutMin > 1) this.manualTimeoutMin--
    }
  },
  mounted() {}
}
</script>
