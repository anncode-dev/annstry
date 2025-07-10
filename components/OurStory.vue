<template > 
    <section
      id="our-story"
      class="relative min-h-screen flex flex-col justify-between px-6 text-white"
      style="background-color: #000"
    >
        <div class="relative z-20 flex flex-col h-full justify-between py-20"></div>
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{
            'opacity-100': currentIndex === index,
            'opacity-0 pointer-events-none': currentIndex !== index
          }"
        >
          <img
            :src="photo"
            alt="Gallery photo"
            class="w-full h-full object-cover rounded-lg select-none"
            draggable="false"
          />
          <!-- Overlay hitam tipis supaya kontras -->
          <div class="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
        </div>
        
        <div class="absolute top-6 right-6 text-right z-30">
          <div class="text-6xl font-serif leading-tight">
            <p class="mb-0">LALA</p>
            <p class="mb-2">JULIAN</p>
          </div>
          <p class="text-sm text-white/90">10 AGUSTUS 2025</p>
        </div>

        <div
          ref="titleRef"
          class="relative max-w-2xl mx-auto px-6 pb-16 text-center transition-opacity duration-1000 opacity-0 z-20"
          :class="{ 'opacity-100': visible }"
        >
          <p class="italic text-sm text-white/80">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
            untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya,
            dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”<br />
            <span class="mt-2 block font-medium">— QS. Ar-Rum: 21</span>
          </p>
        </div>
    </section>

    <section class="bg-gradient-black-opacity py-16">
      <div class="mb-10" data-aos="fade-up">
        <p class="text-5xl text-center font-serif text-white/90 mt-2">The Bride</p>
        <hr class="w-24 mx-auto my-4 border-t-2 border-white/30" />
      </div>

      <div class="relative z-20 flex flex-col items-start px-10 text-left">
        <img
          src="https://plus.unsplash.com/premium_photo-1675851210855-e7727076e829?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Julian Photo"
          class="w-72 h-96 object-cover mb-6 border-b-4 border-white/50 shadow-lg"
          data-aos="fade-left"
        />
        <div>
          <h3 class="text-3xl text-white font-serif font-semibold" data-aos="fade-left">Moch Julian Saputra</h3>
          <p class="text-sm text-white mt-2" data-aos="fade-left">Putra dari Bapak Fulan & Ibu Fulanah</p>
        </div>
      </div>

      <div class="relative z-20 flex justify-center py-8">
        <p class="text-7xl font-serif text-white font-semibold">&</p>
      </div>

      <div class="relative z-20 flex flex-col items-end px-10 text-right">
        <h3 class="text-3xl text-white font-serif font-semibold" data-aos="fade-right">Azdra Lala</h3>
        <p class="text-sm text-white mt-2" data-aos="fade-right">Putri dari Bapak Fulan & Ibu Fulanah</p>
        <img
          src="https://plus.unsplash.com/premium_photo-1675851210855-e7727076e829?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bride Photo"
          class="w-72 h-96 object-cover mt-6 border-t-4 border-white/50 shadow-lg"
          data-aos="fade-right"
        />
      </div>
      <div
      ref="countdownRef"
      class="countdown pt-20 mb-10 "
    >
      <div class="">
        <p class="text-4xl text-center text-white/90" data-aos="zoom-in">COUNTDOWN</p>
        <hr class="w-24 mx-auto my-4 border-t-2 border-white/30" data-aos="zoom-in" />
      </div>
      <div class="flex justify-center space-x-6 mb-8  bg-white/10 mt-5 backdrop-blur-sm border border-white text-white  py-3  font-semibold transition-transform hover:scale-105" data-aos="zoom-in">
        <div class="text-center ">
          <p class="text-6xl text-white font-bold">{{ days }}</p>
          <p class="text-sm text-white/80">Days</p>
        </div>
        <div class="text-center">
          <p class="text-6xl  text-white font-bold">{{ hours }}</p>
          <p class="text-sm text-white/80">Hours</p>
        </div>
        <div class="text-center">
          <p class="text-6xl text-white font-bold">{{ minutes }}</p>
          <p class="text-sm text-white/80">Minutes</p>
        </div>
        <div class="text-center">
          <p class="text-6xl text-white font-bold">{{ seconds }}</p>
          <p class="text-sm text-white/80">Seconds</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
  <p class="text-2xl text-center font-serif text-white/90" data-aos="zoom-in">Save The Date</p>
  <div class="w-px h-20 bg-white/80 mt-4"></div>
</div>

    </div>

    <div class="px-8">
      <div class="flex-1 text-left">
      <p class="text-4xl font-bold mb-4 text-white/90" data-aos="fade-left">AKAD NIKAH</p>
      <div class="flex items-center text-white/80 space-x-6" data-aos="fade-in" data-aos-delay="100">
        <p class="text-2xl text-left font-semibold leading-tight">
          10 <br />
          AGUSTUS <br />
          2025
        </p>
        
        <div class="border-l border-white/50 h-16"></div>
        
        <div>
          <p class="text-sm font-semibold">Pukul 09.00 WIB</p>
          <div class="mt-1 text-sm text-white/80">
            Bertempat di <br>
            Gedung Serbaguna Jakarta <br>
            Jl. Raya Jakarta No. 123 <br>
          </div>
        </div>
      </div>
      <button
        class="bg-white/10 mt-5 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-md font-semibold transition-transform hover:scale-105"
        data-aos="fade-in" data-aos-delay="200"
      >
        Google Maps
      </button>
    </div>

    <!-- Resepsi - kanan -->
    <div class="flex-1 text-right mt-20">
      
      <p class="text-4xl font-bold mb-4 text-white/90" data-aos="fade-right">RESEPSI</p>
      <div class="flex items-end text-white/80 space-x-8" data-aos="fade-in" data-aos-delay="100">
        <div>
          <p class="text-sm font-semibold">Pukul 09.00 WIB</p>
          <div class="mt-1 text-sm text-white/80">
            Bertempat di <br>
            Gedung Serbaguna Jakarta <br>
            Jl. Raya Jakarta No. 123 <br>
          </div>
        </div>
        <div class="border-l border-white/50 h-16"></div>

        <p class="text-2xl text-right font-semibold leading-tight">
          10 <br />
          AGUSTUS <br />
          2025
        </p>
        
        
        
      </div>
<button
        class="bg-white/10 mt-5 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-md font-semibold transition-transform hover:scale-105"
        data-aos="fade-in" data-aos-delay="200"
      >
        Google Maps
      </button>
    </div>
    </div>

    <div class="mb-12 text-center mt-32 px-8" data-aos="fade-up">
    <h2 class="text-3xl font-semibold text-white/80 mb-2">JOIN LIVE STREAMING</h2>
    <p class="text-white/70 max-w-xl mx-auto italic">
      Pernikahan kami dapat disaksikan secara langsung melalui tombol di bawah ini:
    </p>
    <button
        class="bg-white/10 mt-5 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-md font-semibold transition-transform hover:scale-105"
      >
        Live Streaming
      </button>
  </div>

    <div class="mb-12 text-center mt-32 px-10" data-aos="fade-in" data-aos-delay="200">
    <h2 class="text-5xl font-semibold text-white/80 mb-2">Our Story</h2>
    <p class="text-white/70 max-w-xl mx-auto italic">
      Perjalanan kisah cinta kami yang penuh makna dan kebahagiaan.
    </p>
    <hr class="w-20 mx-auto my-6 border-t border-white/30" />
  </div>

  <div class="relative border-l border-white/40 pl-10 space-y-12 px-10 ">
    <div class="relative" data-aos="fade-up" data-aos-delay="100">
      <span
        class="absolute -left-5 top-2 w-4 h-4 bg-white rounded-full border-2 border-white"
      ></span>
      <h3 class="text-2xl text-white/80 font-semibold">Pertemuan Pertama</h3>
      <p class="text-sm text-white/60 mb-2">Januari 2020</p>
      <p class="text-white/80">
        Kami bertemu di sebuah acara komunitas seni, di mana mata kami saling bertemu untuk pertama kali.
      </p>
    </div>

    <div class="relative" data-aos="fade-up" data-aos-delay="100">
      <span
        class="absolute -left-5 top-2 w-4 h-4 bg-white rounded-full border-2 border-white"
      ></span>
      <h3 class="text-2xl text-white/80 font-semibold">Kencan Pertama</h3>
      <p class="text-sm text-white/60 mb-2">Februari 2020</p>
      <p class="text-white/80">
        Kencan pertama kami di sebuah kafe kecil yang hangat, penuh cerita dan tawa sepanjang malam.
      </p>
    </div>

    <div class="relative" data-aos="fade-up" data-aos-delay="100">
      <span
        class="absolute -left-5 top-2 w-4 h-4 bg-white rounded-full border-2 border-white"
      ></span>
      <h3 class="text-2xl text-white/80 font-semibold">Pertunangan</h3>
      <p class="text-sm text-white/60 mb-2">Desember 2024</p>
      <p class="text-white/80">
        Dengan bahagia kami mengikat janji untuk melangkah bersama selamanya.
      </p>
    </div>
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