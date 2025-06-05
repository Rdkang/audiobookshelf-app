<template>
  <modals-modal v-model="show" :width="300" :processing="processing" height="100%">
    <template #outer>
      <div class="absolute top-11 left-4 z-40" style="max-width: 80%">
        <p class="text-md-sys-color-on-surface text-2xl truncate">{{ $strings.HeaderLibraries }}</p>
      </div>
    </template>

    <div class="w-full h-full overflow-hidden absolute top-0 left-0 flex items-center justify-center" @click="show = false">
      <div class="w-full overflow-x-hidden overflow-y-auto bg-md-sys-color-surface-container rounded-shape-corner-extra-large border border-md-sys-color-outline shadow-elevation-3" style="max-height: 75%" @click.stop>
        <ul class="h-full w-full" role="listbox" aria-labelledby="listbox-label">
          <li v-for="library in libraries" :key="library.id" class="text-md-sys-color-on-surface select-none relative py-3 cursor-pointer material-you-state-layer" :class="currentLibraryId === library.id ? 'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container' : ''" role="option" @click="clickedOption(library)">
            <div v-show="currentLibraryId === library.id" class="absolute top-0 left-0 w-0.5 bg-md-sys-color-primary h-full" />
            <div class="flex items-center px-3">
              <ui-library-icon :icon="library.icon" />
              <span class="font-normal block truncate text-lg ml-4">{{ library.name }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </modals-modal>
</template>

<script>
export default {
  data() {
    return {
      processing: false
    }
  },
  computed: {
    show: {
      get() {
        return this.$store.state.libraries.showModal
      },
      set(val) {
        this.$store.commit('libraries/setShowModal', val)
      }
    },
    currentLibraryId() {
      return this.$store.state.libraries.currentLibraryId
    },
    libraries() {
      return this.$store.state.libraries.libraries
    }
  },
  methods: {
    async clickedOption(lib) {
      await this.$hapticsImpact()
      this.show = false
      if (lib.id === this.currentLibraryId) return
      await this.$store.dispatch('libraries/fetch', lib.id)
      this.$eventBus.$emit('library-changed', lib.id)
      this.$localStore.setLastLibraryId(lib.id)
    }
  },
  mounted() {}
}
</script>
