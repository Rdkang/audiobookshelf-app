<template>
  <div class="w-full h-16 bg-md-sys-color-surface-container shadow-elevation-2 relative z-20">
    <div id="appbar" class="absolute top-0 left-0 w-full h-full flex items-center px-4">
      <nuxt-link v-show="!showBack" to="/" class="mr-4">
        <img src="/Logo.png" class="h-10 w-10" />
      </nuxt-link>
      <button v-if="showBack" @click="back" class="material-you-state-layer rounded-full h-10 w-10 flex items-center justify-center mr-3 cursor-pointer text-md-sys-color-on-surface">
        <span class="material-symbols text-3xl">arrow_back</span>
      </button>
      <div v-if="user && currentLibrary">
        <div class="pl-3 pr-4 py-2 bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container rounded-shape-corner-large flex items-center cursor-pointer material-you-state-layer" @click="clickShowLibraryModal">
          <ui-library-icon :icon="currentLibraryIcon" :size="4" font-size="base" />
          <p class="text-sm leading-4 ml-2 mt-0.5 max-w-24 truncate">{{ currentLibraryName }}</p>
        </div>
      </div>

      <widgets-connection-indicator />

      <div class="flex-grow" />

      <widgets-download-progress-indicator />

      <!-- Must be connected to a server to cast, only supports media items on server -->
      <button v-show="isCastAvailable && user" class="mx-2 cursor-pointer flex items-center material-you-state-layer rounded-full h-10 w-10 justify-center text-md-sys-color-on-surface" @click="castClick">
        <span class="material-symbols text-2xl leading-none">
          {{ isCasting ? 'cast_connected' : 'cast' }}
        </span>
      </button>

      <nuxt-link v-if="user" class="mx-1.5 flex items-center h-10 w-10 justify-center material-you-state-layer rounded-full text-md-sys-color-on-surface" to="/search">
        <span class="material-symbols text-2xl leading-none">search</span>
      </nuxt-link>

      <button class="h-10 w-10 mx-1.5 flex items-center justify-center material-you-state-layer rounded-full text-md-sys-color-on-surface" @click="clickShowSideDrawer">
        <span class="material-symbols" style="font-size: 1.75rem">menu</span>
      </button>
    </div>
  </div>
</template>

<script>
import { AbsAudioPlayer } from '@/plugins/capacitor'

export default {
  data() {
    return {
      onCastAvailableUpdateListener: null
    }
  },
  computed: {
    isCastAvailable: {
      get() {
        return this.$store.state.isCastAvailable
      },
      set(val) {
        this.$store.commit('setCastAvailable', val)
      }
    },
    currentLibrary() {
      return this.$store.getters['libraries/getCurrentLibrary']
    },
    currentLibraryName() {
      return this.currentLibrary?.name || ''
    },
    currentLibraryIcon() {
      return this.currentLibrary?.icon || 'database'
    },
    showBack() {
      if (!this.$route.name) return true
      return this.$route.name !== 'index' && !this.$route.name.startsWith('bookshelf')
    },
    user() {
      return this.$store.state.user.user
    },
    username() {
      return this.user?.username || 'err'
    },
    isCasting() {
      return this.$store.state.isCasting
    }
  },
  methods: {
    castClick() {
      if (this.$store.getters['getIsCurrentSessionLocal']) {
        this.$eventBus.$emit('cast-local-item')
        return
      }
      AbsAudioPlayer.requestSession()
    },
    clickShowSideDrawer() {
      this.$store.commit('setShowSideDrawer', true)
    },
    clickShowLibraryModal() {
      this.$store.commit('libraries/setShowModal', true)
    },
    back() {
      window.history.back()
    },
    onCastAvailableUpdate(data) {
      this.isCastAvailable = data && data.value
    }
  },
  mounted() {
    AbsAudioPlayer.getIsCastAvailable().then((data) => {
      this.isCastAvailable = data && data.value
    })
    this.onCastAvailableUpdateListener = AbsAudioPlayer.addListener('onCastAvailableUpdate', this.onCastAvailableUpdate)
  },
  beforeDestroy() {
    if (this.onCastAvailableUpdateListener) this.onCastAvailableUpdateListener.remove()
  }
}
</script>

<style>
#appbar {
  box-shadow: 0px 5px 5px #11111155;
}
.loader-dots div {
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loader-dots div:nth-child(1) {
  left: 0px;
  animation: loader-dots1 0.6s infinite;
}
.loader-dots div:nth-child(2) {
  left: 0px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(3) {
  left: 10px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(4) {
  left: 20px;
  animation: loader-dots3 0.6s infinite;
}
@keyframes loader-dots1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader-dots3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader-dots2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(10px, 0);
  }
}
</style>
