<template>
  <div class="box">
    <div class="user">
      <div class="user__detail">
        <div class="user__thumb">
          <img :src="authStore.profileImg" />
        </div>
        <div class="user__info">
          <strong class="display_name">
            {{ authStore.displayName }}
          </strong>
          <p class="email">
            {{ authStore.email }}
          </p>
          <div class="btn">
            <router-link
              to="/my/profile"
              class="edit_profile">
              프로필 수정
            </router-link>
            <router-link
              to=""
              class="my-style">
              내 스타일
            </router-link>
          </div>
        </div>
      </div>
      <div class="membership">
        <div class="membership__grade">
          <strong>일반 회원</strong>
          <p>회원 등급</p>
        </div>
        <div class="membership__point">
          <strong>0p</strong>
          <p>포인트</p>
        </div>
      </div>
    </div>
    <div class="purchase">
      <div class="purchase__title">
        <strong>구매 내역</strong>
        <router-link
          to="/my/buying"
          class="purchase__more">
          더보기
          <i class="bi bi-chevron-right"></i>
        </router-link>
      </div>
      <div class="purchase__number">
        <router-link
          to="/my/buying"
          class="all purchase__number__box">
          <p>전체</p>
          <strong>36</strong>
        </router-link>
        <router-link
          to="/my/buying"
          class="purchase__number__box">
          <p>입찰 중</p>
          <strong>36</strong>
        </router-link>
        <router-link
          to="/my/buying"
          class="purchase__number__box">
          <p>진행 중</p>
          <strong>0</strong>
        </router-link>
        <router-link
          to="/my/buying"
          class="purchase__number__box">
          <p>종료</p>
          <strong>0</strong>
        </router-link>
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
      email: '',
      displayName: '',
      profileImg: ''
    }
  },
  computed: {
    ...mapStores(useAuthStore)    
  },
  async created() {
    await this.authStore.myInfo()
    // this.load_purchase()
  },
  methods: {
    // async load_purchase() {
    //   const data = await this.authStore.purchaseHistory()
    //   console.log(data.response)
    //   if(data === String) {
    //     console.log('hi')
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
@import '~/scss/MyCommon.scss';
  .box {
    .user {
      display: flex;
      padding: 23px 0 23px 23px;
      border: 1px solid #ebebeb;
      border-radius: 10px;
      background-color: #fff;
      .user__detail {
        display: flex;
        align-items: center;
        .user__thumb {
          width: 100px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-right: 12px;
          border-radius: 100%;
          img {

          }
        }
        .user__info {
          .display_name {
            line-height: 21px;
            font-size: 18px;
            letter-spacing: -.27px;
            font-weight: 600;
            color: #000;
          }
          .email {
            line-height: 18px;
            font-size: 14px;
            letter-spacing: -.21px;
            color: rgba(34,34,34,.5);
          }
          .btn {
            display: flex;
            .edit_profile {
              height: 36px;
              padding: 0 14px;
              margin-top: 12px;
              line-height: 34px;
              border: 1px solid #d3d3d3;
              display: inline-block;  
            }
            .my-style {
              height: 36px;
              padding: 0 14px;
              margin-top: 12px;
              margin-left: 7px;
              line-height: 34px;
              border: 1px solid #d3d3d3;
              display: inline-block;  
            }
          }
        }
      }
      .membership {
        display: flex;
        align-items: center;
        margin-left: auto;
        position: relative;
            &::before {
              content: "";
              background-color: #ebebeb;
              width: 1px;
              position: absolute;
              top: 0;
              left: 50%;
              bottom: 0;
            }
        .membership__grade {
          width: 159px;
          display: inline-block;
          text-align: center;
          strong {
            display: block;
            line-height: 19px;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: -.16px;
          }
          p {
            line-height: 19px;
            font-size: 13px;
            color: rgba(34,34,34,.5);
          }
        }
        .membership__point {
          width: 159px;
          display: inline-block;
          text-align: center;
          strong {
            display: block;
            line-height: 19px;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: -.16px;
          }
          p {
            line-height: 19px;
            font-size: 13px;
            color: rgba(34,34,34,.5);
          }
        }
      }
    }
    .purchase {
      margin-top: 42px;
      .purchase__title {
        max-width: 100%;
        display: flex;
        padding-bottom: 16px;
        strong {
          font-size: 18px;
          letter-spacing: -.27px;
          font-weight: 600;
          cursor: default;
        }
        .purchase__more {
          margin-top: 3px;
          margin-left: auto;
          padding-top: 3px;
          padding-left: 5px;
          margin-left: auto;
          font-size: 13px;
          letter-spacing: -.07px;
          color: rgba(34,34,34,.5);
          text-decoration: none;
        }
      }
      .purchase__number {
        width: 100%;
        display: flex;
        background-color: #fafafa;
        border-radius: 12px;
        .purchase__number__box {
          width: 250px;
          height: 96px;
          position: relative;
          display: block;
          padding-top: 18px;
          text-align: center;
          text-decoration: none;
          color: #000;
          p {
            font-size: 13px;
            color: rgba(34,34,34,.8);
          }
          strong {
            margin-top: 2px;
            font-size: 18px;
            line-height: 20px;
            font-weight: 600;
          }
        }
        .all {
            color: #f15746;
            &::before {
              content: "";
              background-color: #ebebeb;
              width: 1px;
              position: absolute;
              top: 18px;
              right: 0;
              bottom: 18px;
            }
          }
      }
    }
}
</style>
