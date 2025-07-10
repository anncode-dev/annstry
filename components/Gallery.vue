<template>
  <section
    id="gallery"
    class="max-w-md mx-auto px-4 mt-10"
    data-aos="fade-up"
  >
    <h2 class="text-3xl font-serif mb-6 text-white text-center">Galeri</h2>
    <swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="2.8"
      :space-between="10"
      :loop="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      class="w-full rounded-lg overflow-hidden shadow-lg"
    >
      <swiper-slide
        v-for="(img, i) in images"
        :key="i"
        class="w-full h-full flex items-center justify-center overflow-hidden rounded-lg"
      >
        <img
          :src="img"
          alt="Galeri"
          class="w-32 h-32 object-cover"
          draggable="false"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const images = [
  'https://plus.unsplash.com/premium_photo-1675851210855-e7727076e829?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675851210742-1502250d37fa?q=80&w=619&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675851211768-ceefde71c8bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675851210020-045950ac0215?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675851211768-ceefde71c8bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675851211463-7b04cd066e10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
</script>
