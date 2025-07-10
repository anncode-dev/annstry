<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'

const show = ref(false)
const showIntro = ref(true)
const guestName = ref('Tamu Undangan')
const audio = ref(null)

const musicUrl = '/music/music.mp3'

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const to = params.get('to')
  if (to) guestName.value = decodeURIComponent(to)
  setTimeout(() => {
    show.value = true
  }, 300)
  // Disable scroll saat load hero
  document.body.style.overflow = 'hidden'
})

watch(showIntro, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

function handleOpenInvitation() {
  if (!audio.value) {
    audio.value = new Audio(musicUrl)
    audio.value.loop = true
  }
  audio.value.play().catch((e) => {
    console.warn('Autoplay gagal:', e)
  })

  // Scroll ke konten cerita
  const el = document.getElementById('ourstory')
  if (el) el.scrollIntoView({ behavior: 'smooth' })

  showIntro.value = false
}
</script>
