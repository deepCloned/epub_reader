<script setup>
import Epub from 'epubjs'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
let bookUrl = ref('')

function getBookUrl() {
  // ComputerScience-2013_Book_Office365
  const route = useRoute()
  bookUrl = `http://localhost:5000/${route.params.locationName?.split('-').join('/')}.epub`
}
function initEpub() {
  const book = new Epub(bookUrl)
  book.renderTo('read', {
    width: window.innerWidth,
    height: window.innerHeight
  }).display()
}
onMounted(() => {
  getBookUrl()
  initEpub()
})
</script>

<template>
  <main>
    reader-index
    <div id="read"></div>
  </main>
</template>

<style lang="scss"></style>
