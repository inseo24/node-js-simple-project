### npm(node package manager)

- Node.js에서 패키지는 package.json으로 정의한 파일 또는 디렉터리를 의미함
- 패키지에는 package.json이 꼭 포함된다.
- 다음에 정리한 것들 모두 패키지가 될 수 있다.

  1. package.json 파일이 있는 디렉터리
  2. 1번을 압축한 파일
  3. 2번을 내려받을 수 있는 URL 주소
  4. 3번 정보를 가지고 npm 저장소에 <패키지명>@<버전>으로 등록된 것
  5. 4번을 가리키는 <패키지명>@<태그>
  6. <패키지명>만 있는 경우는 5번에서 latest 태그를 가리킴
  7. 1번을 결과로 주는 깃 URL

- package.json으로 정의한 코드 뭉치가 바로 패키지임
- 모듈은 node_modules 디렉터리 아래에 있는 파일 또는 디렉터리를 말함 <- require() 함수로 읽을 수 있음
- 모든 패키지는 모듈이며 npm install로 설치한 패키지들이 저장된다.

- 관리하기 어려움, 그 외 용량 문제, 패키지 내려받기 속도 문제, 보안 문제 등이 있음
- yarn은 이런 문제를 해결하기 위해 페이스북에서 만든 패키지 관리 프로그램
- yarn은 버전 1과 yarn berry라 부르는 버전 2가 있음
  - 버전 1은 npm과 거의 유사한데 패키지 설치가 조금 더 빠른 정도
  - 버전 2는 PnP(Plug'n'Play) 전략으로 node modules을 사용하지 않고 의존성 패키지를 관리함
  - 버전 2는 의존성 찾기는 `.pnp.cjs`에 정리하고, 실제 의존성 패키지 파일은 압축 파일 형태로 `.yarn` 디렉터리 아래의 `cache` 디렉터리에 저장함
