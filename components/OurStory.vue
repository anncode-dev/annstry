<template>
  <!-- SECTION: VIDEO INTRO -->
  <section
    class="relative min-h-screen px-6 text-white overflow-hidden transition-opacity duration-700
  "
  >
    <video
      ref="bgVideo"
      autoplay
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video/OurStory-One.MP4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <section
    class="relative min-h-screen px-6 text-white overflow-hidden transition-opacity duration-700
  "
  >
    <video
      ref="bgVideo"
      autoplay
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video/OurStory-Two.MP4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <section class="relative py-5 bg-black text-white text-center">
    <div>
      <p class="font-[txt] text-4xl">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
    </div>
    <div class="mt-6 px-10">
      <p class="text-sm font-semibold mt-2 font-[txt]">
        Dengan memohonkan Rahmat dan Ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.
      </p>
    </div>
  </section>

  <section
    class="relative min-h-screen px-6 text-white overflow-hidden transition-opacity duration-700
  "
  >
    <video
      ref="bgVideo"
      autoplay
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video/Bride-One.MP4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <!-- SECTION: BRIDE & GROOM -->
  <section class="bg-gradient-black-opacity py-16">
    <div class="mb-10" data-aos="fade-up">
      <p class="text-5xl text-center text-white/90 mt-2">THE BRIDE</p>
      <hr class="w-24 mx-auto my-4 border-t-2 border-white/30" />
    </div>

    <!-- Profile Groom -->
    <div class="relative z-20 flex flex-col items-start px-10 text-left">
      <div class="relative w-72 h-96 mb-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1675851210855-e7727076e829?q=80&w=687"
          alt="Julian Photo"
          class="w-full h-full object-cover border-b-4 border-white/50 shadow-lg"
          data-aos="fade-left"
        />
        <button
          class="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm border border-white text-white px-4 py-2 rounded-md text-sm font-semibold transition-transform hover:scale-105"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          @mochJuhlian
        </button>
      </div>

      <div>
        <h3 class="text-3xl text-white font-semibold" data-aos="fade-left">
          Moch Julian Saputra
        </h3>
        <p class="text-sm text-white mt-2" data-aos="fade-left">
          Putra dari Bapak Fulan & Ibu Fulanah
        </p>
      </div>
    </div>

    <!-- & Separator -->
    <div class="relative z-20 flex justify-center py-8">
      <p class="text-7xl text-white font-semibold">&</p>
    </div>

    <!-- Profile Bride -->
    <div class="relative z-20 flex flex-col items-end px-10 text-right">
      <h3 class="text-3xl text-white font-semibold" data-aos="fade-right">
        Azdra Lala
      </h3>
      <p class="text-sm text-white mt-2" data-aos="fade-right">
        Putri dari Bapak Fulan & Ibu Fulanah
      </p>
      <div class="relative w-72 h-96 mb-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1675851210855-e7727076e829?q=80&w=687"
          alt="Lala Photo"
          class="w-full h-full object-cover border-b-4 border-white/50 shadow-lg"
          data-aos="fade-right"
        />
        <button
          class="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm border border-white text-white px-4 py-2 rounded-md text-sm font-semibold transition-transform hover:scale-105"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          @adzrlala
        </button>
      </div>
    </div>

    <!-- SECTION: COUNTDOWN -->
    <div ref="countdownRef" class="countdown pt-20 mb-10">
      <div data-aos="zoom-in">
        <p class="text-4xl text-center text-white/90">COUNTDOWN</p>
        <hr class="w-24 mx-auto my-4 border-t-2 border-white/30" />
      </div>

      <div
        class="flex justify-center space-x-6 mt-5 mb-8 bg-white/10 backdrop-blur-sm border border-white text-white py-3 font-semibold transition-transform hover:scale-105"
        data-aos="zoom-in"
      >
        <div class="text-center">
          <p class="text-6xl font-bold">{{ days }}</p>
          <p class="text-sm text-white/80">Days</p>
        </div>
        <div class="text-center">
          <p class="text-6xl font-bold">{{ hours }}</p>
          <p class="text-sm text-white/80">Hours</p>
        </div>
        <div class="text-center">
          <p class="text-6xl font-bold">{{ minutes }}</p>
          <p class="text-sm text-white/80">Minutes</p>
        </div>
        <div class="text-center">
          <p class="text-6xl font-bold">{{ seconds }}</p>
          <p class="text-sm text-white/80">Seconds</p>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <p class="text-2xl text-white/90" data-aos="zoom-in">Save The Date</p>
        <div class="w-px h-20 bg-white/80 mt-4"></div>
      </div>
    </div>

    <!-- SECTION: AKAD & RESEPSI -->
    <div class="px-8 flex flex-col md:flex-row justify-between space-y-20 md:space-y-0">
      <!-- Akad -->
      <div class="flex-1 text-left" data-aos="fade-left">
        <p class="text-4xl font-bold mb-4 text-white/90">AKAD NIKAH</p>
        <div class="flex items-center text-white/80 space-x-6">
          <p class="text-2xl font-semibold leading-tight">
            10 <br /> AGUSTUS <br /> 2025
          </p>
          <div class="border-l border-white/50 h-16"></div>
          <div>
            <p class="text-sm font-semibold">Pukul 09.00 WIB</p>
            <p class="mt-1 text-sm">Gedung Serbaguna Jakarta<br />Jl. Raya Jakarta No. 123</p>
          </div>
        </div>
        <button class="bg-white/10 mt-5 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-md font-semibold hover:scale-105">
          Google Maps
        </button>
      </div>

      <!-- Resepsi -->
      <div class="flex-1 text-right" data-aos="fade-right">
        <p class="text-4xl font-bold mb-4 text-white/90">RESEPSI</p>
        <div class="flex items-end text-white/80 space-x-8">
          <div>
            <p class="text-sm font-semibold">Pukul 11.00 WIB</p>
            <p class="mt-1 text-sm">Gedung Serbaguna Jakarta<br />Jl. Raya Jakarta No. 123</p>
          </div>
          <div class="border-l border-white/50 h-16"></div>
          <p class="text-2xl font-semibold leading-tight">
            10 <br /> AGUSTUS <br /> 2025
          </p>
        </div>
        <button class="bg-white/10 mt-5 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-md font-semibold hover:scale-105">
          Google Maps
        </button>
      </div>
    </div>

    <!-- SECTION: LIVE STREAMING -->
    <div class="mb-12 text-center mt-32 px-8" data-aos="fade-up">
      <h2 class="text-3xl font-semibold text-white/80 mb-2">JOIN LIVE STREAMING</h2>
      <p class="text-white/70 max-w-xl mx-auto italic">
        Pernikahan kami dapat disaksikan secara langsung melalui tombol di bawah ini:
      </p>
      <button class="bg-white/10 mt-5 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-md font-semibold hover:scale-105">
        Live Streaming
      </button>
    </div>

    <!-- SECTION: OUR STORY -->
    <div class="mb-12 text-center mt-32 px-10" data-aos="fade-in">
      <h2 class="text-5xl font-semibold text-white/80 mb-2">Our Story</h2>
      <p class="text-white/70 max-w-xl mx-auto italic">Perjalanan kisah cinta kami yang penuh makna dan kebahagiaan.</p>
      <hr class="w-20 mx-auto my-6 border-t border-white/30" />
    </div>

    <div class="relative border-l border-white/40 pl-10 space-y-12 px-10">
      <template v-for="(item, index) in timeline" :key="index">
        <div class="relative" data-aos="fade-up" :data-aos-delay="100 * index">
          <span class="absolute -left-5 top-2 w-4 h-4 bg-white rounded-full border-2 border-white"></span>
          <h3 class="text-2xl text-white/80 font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-white/60 mb-2">{{ item.date }}</p>
          <p class="text-white/80">{{ item.desc }}</p>
        </div>
      </template>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Foto galeri background
const photos = [
  'https://plus.unsplash.com/premium_photo-1675851211463-7b04cd066e10?q=80&w=687&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1675851211519-fc13d860e103?q=80&w=687&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1675851211768-f8b9296ed7bd?q=80&w=687&auto=format&fit=crop',
]

// Slider logika
const currentIndex = ref(0)
let sliderInterval = null

// Countdown logika
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const targetDate = new Date('2025-08-10T00:00:00')
let countdownInterval = null

function updateCountdown() {
  const now = new Date()
  const timeDiff = targetDate - now

  if (timeDiff <= 0) {
    clearInterval(countdownInterval)
    days.value = hours.value = minutes.value = seconds.value = 0
    return
  }

  days.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((timeDiff / (1000 * 60)) % 60)
  seconds.value = Math.floor((timeDiff / 1000) % 60)
}

// Intersection logic
const visible = ref(false)
const isCountdownVisible = ref(false)
const titleRef = ref(null)
const countdownRef = ref(null)

onMounted(() => {
  // Init AOS
  AOS.init({
    duration: 800,
    once: true
  })

  // Slider interval
  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % photos.length
  }, 3000)

  // Countdown interval
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)

  // Fade in kutipan
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (titleRef.value) observer.observe(titleRef.value)

  // Observer untuk mendeteksi countdown tampil
  const countdownObserver = new IntersectionObserver(
    (entries) => {
      isCountdownVisible.value = entries[0].isIntersecting
    },
    { threshold: 0.3 }
  )
  if (countdownRef.value) countdownObserver.observe(countdownRef.value)
})

onBeforeUnmount(() => {
  clearInterval(sliderInterval)
  clearInterval(countdownInterval)
})
</script>


<style scoped>
/* Optional tambahan animasi lembut */
.countdown p {
  transition: all 0.3s ease;
}

.bg-gradient-black-opacity {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.664),
    rgba(0, 0, 0, 0.08)
  );
}

</style>