# 팀프로젝트
### 나의 역할
- 사용자 제품 검색
- 사용자 제품 구매

# 주요 기능
- 루트 헤더 섹션에서 검색페이지로 검색
- 검색 필터 기능
- 로그인 상태로 제품 구매 가능 유무

### 헤더 섹션 검색
- 검색어를 로컬스토리지로 스토어에 전달.
  - API 특성상 검색어를 로컬에서 처리해야함
  - 페이지 이동시 데이터 초기화 현상을 피하기 위해 로컬스토리지 사용
- 최근 검색어를 로컬스토리에서 가져옴
  - 인덱스를 활용해서 최근순으로 값 출력.
  - 최근 검색어로 검색 가능

### 검색 필터
- 상단 카테고리, 필터 분류와 현재 검색된 필터 연동
  - 서로 상호작용을 통해서 사용자가 더 쉽게 다룰수 있음
- 브랜드 대표 이미지로 검색 가능.
- 필터 카테고리, 브랜드, 가격 검색 기능
  - 카테고리는 종류가 많아 데이터 연동을 통해 필터 동작을 편하게 만듬
  - 사용자가 추가한 필터 갯수, 이름 출력

### 제품 구매
- 제품 상세페이지에서 로그인상태 판단
  - 로그인 상태, 계좌 유무, 잔액으로 구매 가능여부 판단
  - 비로그인으로 구매 시도하면 로그인페이지로 유도하는 문구 뜸
  - 연결된 계좌가 없을 경우에 계좌조회 링크로 유도되도록 함
  - 잔액 부족하거나 다른 계좌문제로 구매가 안될때 계좌 확인 요청 창이 뜸


# 회고 (사용자검색)
팀프로젝트를 통해서 역할분담을 하고 git-flow를 활용해보니 개발자 팀 협업에 대해 적응이 되었다. 이번 프로젝트는 디자인만 클론하다 보니 구조에 대해 더 집중할 수 있었고 데이터 흐름에 많은 신경을 써가며 작업했다. 컴포넌트 3곳에서 동시에 동작이 필요했을 때 데이터 흐름을 읽기 힘들었고 구조도 어떻게 해야하는지 판단이 잘 안섰는데 지금은 이런 고민들로 많이 배울 수 있던거 같다. 많은 데이터를 하나로 묶어서 코드를 정리하며 작업 했는데 그러다보니 배열 메서드 활용에 대해 많은 공부가 됐다. 부족했던 점은 조건문과 for문을 남발한 기분이 든다. 좀더 정리된 코드로 짤 수 있을거같은데 방법을 끝내 찾지 못했다. 아직 부족함이 많이 느껴지는 부분이다. 그러면서도 이전에 했던 과제들보다 더 많은 고민을 할 수 있어서 좋았고 결과물도 좋아서 팀원분들에게 고맙다.
