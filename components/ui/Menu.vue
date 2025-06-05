<template>
  <div class="relative" v-click-outside="clickOutside">
    <button type="button" class="relative w-full bg-md-sys-color-surface border border-md-sys-color-outline rounded-shape-corner-extra-small shadow-elevation-1 pl-3 pr-10 py-2 text-left focus:outline-none text-sm cursor-pointer material-you-transition focus:border-md-sys-color-primary" aria-haspopup="listbox" aria-expanded="true" @click.stop.prevent="showMenu = !showMenu">
      <span class="flex items-center">
        <span class="block truncate text-md-sys-color-on-surface">{{ label }}</span>
      </span>
      <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <span class="material-symbols text-md-sys-color-on-surface-variant">person</span>
      </span>
    </button>

    <transition name="menu">
      <ul v-show="showMenu" class="absolute z-10 -mt-px w-full bg-md-sys-color-surface-container border border-md-sys-color-outline shadow-elevation-2 max-h-56 rounded-shape-corner-extra-small py-1 text-base ring-1 ring-md-sys-color-outline ring-opacity-5 overflow-auto focus:outline-none text-sm" tabindex="-1" role="listbox" aria-activedescendant="listbox-option-3">
        <template v-for="item in items">
          <nuxt-link :key="`link-${item.value}`" v-if="item.to" :to="item.to">
            <li class="text-md-sys-color-on-surface select-none relative py-2 cursor-pointer material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12" role="option" @click="clickedOption(item.value)">
              <div class="flex items-center">
                <span class="font-normal ml-3 block truncate font-sans">{{ item.text }}</span>
              </div>
            </li>
          </nuxt-link>
          <li v-else :key="`item-${item.value}`" class="text-md-sys-color-on-surface select-none relative py-2 cursor-pointer material-you-transition hover:bg-md-sys-color-on-surface/8 active:bg-md-sys-color-on-surface/12" role="option" @click="clickedOption(item.value)">
            <div class="flex items-center">
              <span class="font-normal ml-3 block truncate font-sans">{{ item.text }}</span>
            </div>
          </li>
        </template>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Menu'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    clickOutside() {
      this.showMenu = false
    },
    clickedOption(itemValue) {
      this.$emit('action', itemValue)
      this.showMenu = false
    }
  },
  mounted() {}
}
</script>
