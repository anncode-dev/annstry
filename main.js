import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "../App.vue";

const app = createApp(App);
app.use(createPinia()); // Aktifkan Pinia
app.mount("#app");
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    once: true, // animasi hanya sekali saat scroll
    duration: 700,
    easing: 'ease-in-out',
  })
})
