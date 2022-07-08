<template>
  <div class="box">
    <div class="title">
      프로필 정보
    </div>
    <div class="name">
      <div
        v-if="edit"
        class="name__view flex">
        <p>{{ authStore.displayName }}</p>
        <button @click="edit = !edit">
          변경
        </button>
      </div>
      <div
        v-else
        class="name__edit">
        <input
          v-model="displayName"
          type="text"
          maxlength="20"
          @keydown.enter="editProfile" />
        <button @click="editProfile">
          변경
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '~/store/auth'

export default {
  data() {
    return {
      edit: true,
      email: '',
      displayName: '',
      profileImg: '',
      oldPassword: '',
      newPassword: ''
    }
  },
  computed: {
    ...mapStores(useAuthStore)    
  },
  async created() {
    await this.authStore.myInfo()
  },
  methods: {
    async editProfile() {
      await this.authStore.editProfile({
        email: this.email,
        displayName: this.displayName,
        profileImg: this.profileImg,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      })
      this.edit = true
      await this.authStore.myInfo()
    }
  }
}
</script>

<style scoped lang="scss">
.flex {
  display: flex;
}
</style>
