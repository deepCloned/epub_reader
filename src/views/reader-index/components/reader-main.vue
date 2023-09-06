<script setup>
  import Epub from 'epubjs';
  import { ref, onMounted } from 'vue';
  
  let book = ref('')
  function initEpub() {
    let baseUrl = '/2014_Book_Self-ReportedPopulationHealthA.epub'
    book.value = new Epub(baseUrl)
    book.value.renderTo('read', {
      width: window.width,
      height: window.height
    }).display()
    console.log('book.value', book.value)
  }
  onMounted(() => {
    initEpub()
  })
  function prevPage() {
    if (book.value) {
      book.value.rendition.prev()
    }
  }
  function nextPage() {
    console.log(book)
    if (book.value) {
      book.value.rendition.next()
    }
  }
  function toggleMenu() {
    console.log('show menu')
  }
</script>

<template>
  <div class="reader-main">
    <div id="read"></div>
    <div class="operation-mask">
      <div class="left" @click="prevPage"></div>
      <div class="center" @click="toggleMenu">center</div>
      <div class="right" @click="nextPage">right</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../assets//styles/global.scss';
  .reader-main{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .operation-mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      .left{
        width: 20%;
      }
      .center{
        width: 60%;
      }
      .right{
        width: 20%;
      }
    }
  }
</style>
