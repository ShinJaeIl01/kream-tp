<template>
  <div class="box">
    <router-link
      to="/my"
      class="my on__link">
      <h2>마이 페이지</h2>
    </router-link>
    
    <div class="navUp">
      <strong>쇼핑 정보</strong>
      <ul>
        <li class="on">
          <router-link
            to="/my/buying"
            class="on__link">
            구매 내역
          </router-link>
        </li>
        <li class="off">
          판매 내역
        </li>
        <li class="off">
          보관 판매
        </li>
        <li class="off">
          관심 상품
        </li>
      </ul>
    </div>

    <div class="navDown">
      <strong>내 정보</strong>
      <ul>
        <li class="on">
          <router-link
            to="/my/profile"
            class="on__link">
            프로필 정보
          </router-link>
        </li>
        <li class="off">
          주소록
        </li>
        <li class="on">
          <router-link
            to="/my/account"
            class="on__link">
            계좌 정보
          </router-link>
        </li>
        <li class="off">
          판매 정산 계좌
        </li>
        <li class="off">
          포인트
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  min-width: 180px;
  margin-right: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  .my {
    h2 {
      padding-bottom: 30px;
      font-weight: 600;
      font-size: 24px;
    }
  }
  .navUp {
    strong {
      display: inline-block;
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 600;
      cursor: default;
  }
    .off {
      margin-top: 12px;
      font-size: 15px;
      color: rgba(34,34,34,.5);
      text-decoration: line-through;
      cursor: default;
    }
    .on {
      margin-top: 0;
      .on__link {
        font-size: 15px;
        color: rgba(34,34,34,.5);
      }
    }
  }
  .navDown {
    margin-top: 40px;
    strong {
      display: inline-block;
      font-size: 18px;
      font-weight: 600;
      cursor: default;
    }
    .off {
      margin-top: 12px;
      font-size: 15px;
      color: rgba(34,34,34,.5);
      text-decoration: line-through;
      cursor: default;
    }
    .on {
      margin-top: 12px;
      .on__link {
        font-size: 15px;
        color: rgba(34,34,34,.5);
      }
    }
  }
  .on__link {
    text-decoration: none;
    color: #222;
  }
}
</style>
