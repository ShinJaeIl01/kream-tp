<template>
  <div class="container">
    <MyNav />
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '~/store/auth'
import MyNav from '~/views/MyNav.vue'

export default {
  components: {
    MyNav
  },
    computed: {
    ...mapStores(useAuthStore)
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  padding: 40px 40px 160px;
  font-family: -apple-system,BlinkMacSystemFont,Roboto,AppleSDGothicNeo-Regular,NanumBarunGothic,NanumGothic,나눔고딕,Segoe UI,Helveica,Arial,Malgun Gothic,Dotum,sans-serif;
  color: #222;
}
</style>
