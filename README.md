# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

- setInterval를 활용한 배너 무한 루프
- 검색 텍스트 데이터 전달(input, category, trend brand)
  - 한글 입력시 함수가 두번 호출되는 오류 해결: keyup을 keypress로 변경하면 된다.
- 트렌드 브랜드를 클릭하면 중복되서 브랜드가 계속 추가되는 현상에 조건문을 추가해서 find 메서드로 이미 있을시 추가되지 않도록 했다.
- 필터 버튼의 상호작용
  - 카테고리: 대분류 각각의 불린 데이터로 문자데이터를 store로 전송, 대분류와 중분류 통틀어 한자기 카테고리만 정할 수 있도록 하기 위해서 각각 데이터 상호작용에 많은 애를 먹었던거 같다. 클릭 이벤트 타겟과 DOM API를 활용해서 사용자가 원하는 버튼에 상호하는 여러 조건을 만들어서 해결을 했다. 검색 태그 데이터에는 카테고리 갯수가 한개만 유지되도록 카테고리가 검색 태그 내에 들어있는지 검사를 해서 조건문을 달았다. 중분류에서 소분류 리스트가 열리고 동일한 중분류를 클릭해도 소분류가 안닫히도록. 검색할때 쓰이는 searchTags의 변화로 헤더 카테고리를 클릭하면 searchTags에 들어가고 그 변화를 필터 카테고리가 낚아채서 동시에 열린다.
  - 브랜드: store 데이터에 접근해서 v-for로 브랜드 리스트를 응답받는다. 중복 선택이 가능하다. 결과창 단추와의 연동은 store에 지워지는 브랜드의 이름을 담는용으로 데이터를 하나 만들어서 지울때 그곳에 담아둔다. 그리고 data brands[]의 길이 변화를 낚아채서 지워진 브랜드를 담은 문자와 브랜드 필터 리스트에서 동일한 걸 찾아서 꺼줬다.
  - 가격: 금액(금액 필터를 사용후 다른 필터를 추가하고서 제거하면 금액필터가 적용된 결과로 돌아와야한다. store 함수에서 조건문을 걸어 this.price === '금액 필터'로 했지만 안됐는데 그 이유는 '금액 필터'를 문자 타입으로만 인식해서 그런듯 하다. 그래서 includes 메서드를 통해서 불린데이터를 받으니 조건문이 잘 작동한다.,
  금액 조건에 맞는 값을 반환하는 식을 단순히 10000 < item < 50000 이렇게 해서는 filter 메서드가 알수가 없다 그래사 10000 < item && item < 50000로 해서 && 연산자를 통해 나눠줘야한다.) 결과창 단추와의 연동은 store에 지워지는 가격의 이름을 담는용으로 데이터를 하나 만들어서 지울때 그곳에 담아둔다. 그리고 data price 변화를 낚아채서 지워진 가격 문자를 담은 데이터와 가격 필터 리스트에서 동일한 걸 찾아서 꺼줬다.