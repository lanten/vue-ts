<template>
  <div class="about">
    <p>about is created</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  mounted() {
    console.log('about is mounted')
  }
}
</script>

<style lang="less">
.about {
}
</style>
