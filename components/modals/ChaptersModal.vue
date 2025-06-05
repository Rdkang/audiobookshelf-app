<template>
  <modals-modal v-model="show" :width="400" height="100%">
    <template #outer>
      <div v-if="currentChapter" class="absolute top-10 left-4 z-40 pt-1" style="max-width: 80%">
        <p class="text-md-sys-color-on-surface text-lg truncate">{{ chapters.length }} {{ $strings.LabelChapters }}</p>
      </div>
    </template>

    <div class="w-full h-full overflow-hidden absolute top-0 left-0 flex items-center justify-center" @click="show = false">
      <div ref="container" class="w-full overflow-x-hidden overflow-y-auto bg-md-sys-color-surface-container rounded-shape-corner-extra-large elevation-3" style="max-height: 75%" @click.stop>
        <ul class="h-full w-full" role="listbox" aria-labelledby="listbox-label">
          <template v-for="chapter in chapters">
            <li
              :key="chapter.id"
              :id="`chapter-row-${chapter.id}`"
              class="text-md-sys-color-on-surface select-none relative py-4 cursor-pointer material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12"
              :class="currentChapterId === chapter.id ? 'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container' : ''"
              role="option"
              @click="clickedOption(chapter)"
            >
              <div class="relative flex items-center pl-4 pr-20">
                <p class="font-normal block truncate text-sm" :class="currentChapterId === chapter.id ? 'text-md-sys-color-on-secondary-container' : 'text-md-sys-color-on-surface'">{{ chapter.title }}</p>
                <div class="absolute top-0 right-4 -mt-0.5">
                  <span class="font-mono leading-3 text-sm" :class="currentChapterId === chapter.id ? 'text-md-sys-color-on-secondary-container' : 'text-md-sys-color-on-surface-variant'" style="letter-spacing: -0.5px">{{ $secondsToTimestamp(chapter.start / _playbackRate) }}</span>
                </div>
              </div>

              <div v-show="chapter.id === currentChapterId" class="w-1 h-full absolute top-0 left-0 bg-md-sys-color-primary rounded-r-full" />
            </li>
          </template>
        </ul>
      </div>
    </div>
  </modals-modal>
</template>

<script>
export default {
  props: {
    value: Boolean,
    chapters: {
      type: Array,
      default: () => []
    },
    currentChapter: {
      type: Object,
      default: () => null
    },
    playbackRate: Number
  },
  data() {
    return {}
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.$nextTick(this.scrollToChapter)
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
    _playbackRate() {
      if (!this.playbackRate || isNaN(this.playbackRate)) return 1
      return this.playbackRate
    },
    currentChapterId() {
      return this.currentChapter?.id
    },
    currentChapterTitle() {
      return this.currentChapter?.title || null
    }
  },
  methods: {
    clickedOption(chapter) {
      this.$emit('select', chapter)
    },
    scrollToChapter() {
      if (!this.currentChapterId) return

      const container = this.$refs.container
      if (container) {
        const currChapterEl = document.getElementById(`chapter-row-${this.currentChapterId}`)
        if (currChapterEl) {
          const offsetTop = currChapterEl.offsetTop
          const containerHeight = container.clientHeight
          container.scrollTo({ top: offsetTop - containerHeight / 2 })
        }
      }
    }
  },
  mounted() {}
}
</script>
