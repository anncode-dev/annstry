<template>
  <section
    v-if="showIntro"
    :class="['relative min-h-screen px-6 text-white overflow-hidden transition-opacity duration-700', { 'opacity-0 pointer-events-none': hideIntro }]"
  >
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      :style="{
        backgroundImage:
          'url(https://plus.unsplash.com/premium_photo-1675851210836-e938be7d7508?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-40 z-10"></div>

    <!-- Konten utama -->
    <div class="relative z-20 flex flex-col h-full justify-between py-64">
      <div class="text-center">
        <div class="mr-20 text-7xl mb-2 font-[SNPro]">
          Sandrina
        </div>
        <div class="ml-24 text-7xl mb-2 font-[SNPro]">
          Nandang
        </div>
      </div>
    </div>

    <!-- Tamu + Tombol -->
    <div
      class="absolute bottom-40 left-0 right-0 text-center z-20 px-4 transition-opacity duration-500"
      :class="{ 'opacity-100': show, 'opacity-0': !show }"
    >
      <p class="text-sm">Kepada Yth.</p>
      <p class="text-lg font-semibold mb-4">{{ guestName }}</p>
      <button
        @click="handleOpenInvitation"
        class="bg-white/10 backdrop-blur-sm border border-white text-white px-6 py-3 mt-5 rounded-md transition-transform hover:scale-105"
      >
        BUKA UNDANGAN
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

const show = ref(false)
const showIntro = ref(true)
const hideIntro = ref(false)
const guestName = ref('Tamu Undangan')
const audio = ref(null)

const musicUrl = '/music/music.mp3'

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const to = params.get('to')
  if (to) guestName.value = decodeURIComponent(to)

  // Lock scroll (html + body)
  document.documentElement.classList.add('noscroll')
  document.body.classList.add('noscroll')

  setTimeout(() => {
    show.value = true
  }, 500)
})

async function handleOpenInvitation() {
  if (!audio.value) {
    audio.value = new Audio(musicUrl)
    audio.value.loop = true
  }
  audio.value.play().catch((e) => {
    console.warn('Autoplay gagal:', e)
  })

  hideIntro.value = true

  await new Promise((resolve) => setTimeout(resolve, 700))

  showIntro.value = false

  await nextTick()

  // Unlock scroll
  document.documentElement.classList.remove('noscroll')
  document.body.classList.remove('noscroll')

  const el = document.getElementById('our-story')
  if (el) el.scrollIntoView({ behavior: 'smooth' })

  setTimeout(() => {
    if (window.AOS) {
      window.AOS.refresh()
      window.AOS.refreshHard()
    }
  }, 600)
}
</script>

<style>
html.noscroll,
body.noscroll {
  overflow: hidden !important;
  height: 100% !important;
}
</style>
