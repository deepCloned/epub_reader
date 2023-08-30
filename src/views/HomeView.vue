<script setup>
import Epub from 'epubjs';
import { onMounted } from 'vue';
onMounted(() => {
  const book = new Epub('./2014_Book_Self-ReportedPopulationHealthA.epub')
  book.renderTo('read', {
    width: window.innerWidth,
    height: window.innerHeight
  }).display()
})
</script>

<template>
  <main>
    <div id="read">epub</div>
    <div class="test">test</div>
  </main>
</template>

<style lang="scss" scoped>
  .test{
    color: red;
  }
</style>
