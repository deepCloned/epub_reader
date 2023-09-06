<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ReaderMain from './components/reader-main.vue'
let bookUrl = ref('')

function getBookUrl() {
  // ComputerScience-2013_Book_Office365
  const route = useRoute()
  bookUrl.value = `http://localhost:5000/${route.params.locationName?.split('-').join('/')}.epub`
  bookUrl.value = '/2014_Book_Self-ReportedPopulationHealthA.epub'
}
function initEpub() {
  // const book = new Epub(bookUrl.value)
  // book.renderTo('read', {
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // }).display()
  console.log(bookUrl.value)
}
onMounted(() => {
  getBookUrl()
  initEpub()
})
</script>

<template>
  <main class="reader-index">
    <reader-main></reader-main>
  </main>
</template>

<style lang="scss">
  @import '../../assets/styles/global.scss';
  .reader-index{
    width: 100%;
    height: 100%;
    .title{
      font-size: px2rem(100);
    }
  }
</style>
