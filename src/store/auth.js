import { defineStore } from 'pinia'
import axios from 'axios'

const headers = {
  'content-type': 'application/json',
  'apikey': 'FcKdtJs202204',
  'username': 'team4'
}

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      user: null,
      logInLoading: true,
      email: '',
      displayName: '',
      profileImg: '',
      banks: null
    }
  },
  actions: {
    async signUp(payload) {
      const { email, password, displayName} = payload
      const res = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup',
        method: 'POST',
        headers,
        data: {
          email,
          password,
          displayName
        }
      })
      const { user, accessToken } = res.data
      window.localStorage.setItem('token', accessToken)
      this.user = user
    },
    async signIn(payload) {
      const { email, password } = payload
      const res = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login',
        method: 'POST',
        headers,
        data: {
          email,
          password,
        }
      })
      const { user, accessToken } = res.data
      window.localStorage.setItem('token', accessToken)
      this.user = user
    },
    async signOut() {
      const accessToken = window.localStorage.getItem('token')
      await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout',
        method: 'POST',
        headers: { ...headers, Authorization: `Bearer ${accessToken}`
        }
      })
      window.localStorage.removeItem('token')
      this.user = null
    },
    async myInfo() {
      const accessToken = window.localStorage.getItem('token')
      const res = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me',
        method: 'POST',
        headers: { ...headers, Authorization: `Bearer ${accessToken}` }
      })
      const { email, displayName, profileImg } = res.data
      this.email = email
      this.displayName = displayName
      this.profileImg = profileImg
      if(this.profileImg === null) {
        this.profileImg = 'https://kream.co.kr/_nuxt/img/blank_profile.4347742.png'
      }
    },
    async purchaseHistory() { // 제품 등록 후 작업
      // const accessToken = window.localStorage.getItem('token')
      // const res = await axios({
      //   url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/details',
      //   method: 'GET',
      //   headers: { ...headers, Authorization: `Bearer ${accessToken}` }
      // })
      // return res
    },
    async editProfile(payload) {
      const { email, displayName, profileImg, oldPassword, newPassword, } = payload
      const accessToken = window.localStorage.getItem('token')
      await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user',
        method: 'PUT',
        headers: { ...headers, Authorization: `Bearer ${accessToken}` },
        data: {
          email,
          displayName,
          profileImg,
          oldPassword,
          newPassword
        }
      })
    },
    async chooseBank() {
      const accessToken = window.localStorage.getItem('token')
      const res = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks',
        method: 'GET',
        headers: { ...headers, Authorization: `Bearer ${accessToken}` },
      })
      console.log(res)
      this.banks = res.data
      console.log(this.banks)
      return res
    },
    async addAccount(payload) {
      const { bankCode, accountNumber, phoneNumber, signature } = payload
      const accessToken = window.localStorage.getItem('token')
      await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account',
        method: 'POST',
        headers: { ...headers, Authorization: `Bearer ${accessToken}` },
        data: {
          bankCode,
          accountNumber,
          phoneNumber,
          signature
        }
      })
    },
    async searchProduct(payload) {
      const { searchTag, searchText } = payload
      await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search',
        method: 'POST',
        headers,
        data: {
          searchText,
          searchTag
        }
      })
    }
  }
})
