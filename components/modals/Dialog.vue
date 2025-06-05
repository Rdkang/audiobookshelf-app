<template>
  <modals-modal v-model="show" :width="width" height="100%">
    <template #outer>
      <div v-if="title" class="absolute top-10 left-4 z-40 pt-1 pb-1.5" style="max-width: 80%">
        <p class="text-md-sys-color-on-surface text-xl truncate">{{ title }}</p>
      </div>
    </template>

    <div class="w-full h-full overflow-hidden absolute top-0 left-0 flex items-center justify-center" @click="show = false">
      <div ref="container" class="w-full overflow-x-hidden overflow-y-auto bg-md-sys-color-surface-container rounded-shape-corner-extra-large elevation-3 p-0" style="max-height: 75%" @click.stop>
        <ul class="h-full w-full" role="listbox" aria-labelledby="listbox-label">
          <template v-for="item in itemsToShow">
            <slot :name="item.value" :item="item" :selected="item.value === selected">
              <li
                :key="item.value"
                :ref="`item-${item.value}`"
                class="text-md-sys-color-on-surface select-none relative cursor-pointer material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12"
                :class="selected === item.value ? 'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container' : ''"
                :style="{ paddingTop: itemPaddingY, paddingBottom: itemPaddingY }"
                role="option"
                @click="clickedOption(item.value)"
              >
                <div class="relative flex items-center px-4">
                  <span v-if="item.icon" class="material-symbols text-xl mr-3" :class="selected === item.value ? 'text-md-sys-color-on-secondary-container' : 'text-md-sys-color-on-surface-variant'">{{ item.icon }}</span>
                  <p class="font-normal block truncate text-base" :class="selected === item.value ? 'text-md-sys-color-on-secondary-container' : 'text-md-sys-color-on-surface'">{{ item.text }}</p>
                </div>
              </li>
            </slot>
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
    title: String,
    items: {
      type: Array,
      default: () => []
    },
    selected: [String, Number], // optional
    itemPaddingY: {
      type: String,
      default: '16px'
    },
    width: {
      type: [String, Number],
      default: 300
    }
  },
  data() {
    return {}
  },
  watch: {
    show: {
      immediate: true,
      handler(newVal) {
        if (newVal) this.$nextTick(this.init)
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
    itemsToShow() {
      return this.items.map((i) => {
        if (typeof i === 'string') {
          return {
            text: i,
            value: i
          }
        }
        return i
      })
    }
  },
  methods: {
    clickedOption(action) {
      this.$emit('action', action)
    },
    init() {
      if (this.selected && this.$refs[`item-${this.selected}`]?.[0]) {
        // Set scroll position so that selected item is in the center
        const containerOffset = this.$refs.container.offsetTop + this.$refs.container.clientHeight / 2
        const scrollAmount = this.$refs[`item-${this.selected}`][0].offsetTop - containerOffset
        this.$refs.container.scrollTo({
          top: scrollAmount
        })
      }
    }
  },
  mounted() {}
}
</script>
