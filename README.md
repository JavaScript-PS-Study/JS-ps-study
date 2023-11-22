# JavaScript PS Study

자바스크립트를 이용한 코딩테스트 문제 풀이 레포지토리입니다.

## ✨ 진행 기간

> 2023년 11월 24일 ~ 12월 15일 (한 달) <br />
> OT : 11월 23일 (목) 오전 10시 디스코드

- **Week1** : 11월 23일 ~ 11월 24일
- **Week2** : 11월 27일 ~ 12월 1일
- **Week3** : 12월 4일 ~ 12월 8일
- **Week4** : 12월 11일 ~ 12월 15일

## 🔥스터디를 통해 얻고자 하는 것

- **커뮤니케이션 능력 :** 나의 코드를 글과 말로 설명하는 능력
- **문제 해결력 :** 문제 접근 방향에 따른 장단점을 논의하고 더 나은 방안을 모색하는 능력

## 🗓️ 스터디 진행 방식

> **대면 비대면 혼합 진행**

- **대면 (필수)**

  - **매주 금요일 오전 10시 - 11시**
  - 해당 주차 공통 문제 리스트 중 할 수 있는 만큼 한주간풀이 후, 해당 문제를 푼 방법에 대해 발표 및 토론
  - 문제 접근 방식과 구현 방식에 대해 인당 5분정도 발표 후 상호 피드백

- **비대면 문풀 스크럼 (주 2회 참석 필수)**

  - **매주 월요일, 화요일, 수요일, 목요일 오전 10시 - 11시**
  - 참석자 미리 노션에 참여 등록
  - 문풀 진행 시 디스 코드 화면 공유하며 진행
  - 개인이 원하는 문제로 1일 1문풀 후 Github로 PR, 코드리뷰 진행

- **추가 진행 사항 (선택)**

  - 스터디 관련 블로그 글 주 1회 작성

- **사용 플랫폼**
  | 목적 | 사용 플랫폼 |
  | ---------------- | ----------- |
  | **커뮤니케이션** | 디스코드 |
  | **코드 리뷰** | Github |
  | **일정 관리** | 노션 |

## ✈️ 참여 방법

1. 해당 레포지토리를 로컬에 Clone 합니다.
   husky와 Prettier 설치를 위해 필요 의존성을 다운로드 합니다.

   ```
   git clone https://github.com/JavaScript-PS-Study/JSPS.git
   ```

   ```
   npm ci
   ```

2. 해당 Repo에 `[해당 주차]/[닉네임]` 의 컨벤션을 지켜 자신의 브랜치를 생성 후 체크아웃합니다. 예시) `week1/seo`

   ```
   git branch -b [해당 주차]/[닉네임]
   ```

   meeting 관련 폴더를 편집하고 싶다면, `[해당 주차]/meeting/[닉네임]` 형식의 브랜치에서 편집해주세요. (PR시 미팅 관련 커밋 PR이 같이 되는 것을 방지하기 위함.)

3. 자신의 닉네임으로 된 폴더를 생성합니다. 폴더의 구조는 [`W1/template`](./W1/template/)와 같아야 합니다. 이를 위해 아래의 커멘드를 실행합니다.

   ```cmd
    // WINDOW
    mkdir [해당 주차]/[닉네임]                 // 폴더 생성
    xcopy W1\template [해당 주차]/[닉네임] /E  // 템플릿 폴더 복제
   ```

   ```cmd
     # MAC
     mkdir -p [해당 주차]/[닉네임]                 # 폴더 생성
     cp -r W1/template [해당 주차]/[닉네임]        # 템플릿 폴더 복사
   ```

- 폴더 구조 및 설명

  ```t예시t
  [Week Folder] - [My Nickname Folder] - daily    // 비대면 주중 문풀 레포
                                      \_ meeting  // 대면 발표용
  ```

  - **daily** : 주중 오전 10시에 진행하는 문풀 레포입니다. 1시간동안 풀이 후 아래 내용을 지켜 origin으로 PR합니다.
  - **meeting** : 대면 모임 전까지 주어진 문제 리스트를 자유롭게 풀고, 모임 당일 발표합니다.
    - 해당 폴더 편집은 `[해당 주차]/meeting/[닉네임]` 형식의 브랜치에서 진행하시면 됩니다.
    - 문제 리스트는 **매주 일요일 저녁 모임장이 [`[해당주차 폴더] / README.md`](./W1/README.md) 에 기재**합니다. 한달간 공통으로 풀 문제 DB는 노션에 준비해 두었습니다. (노션 링크는 디스코드를 참고해 주세요.)

4. 문제를 푼 후, 풀이한 **문제의 제목을 파일 제목으로 설정**합니다. 예시) [`두-수의-차.js`](./W1/template/daily/두-수의-차.sample.js)

5. 미리 설정되어 있는 [Snippets](.vscode/snippet.code-snippets) 을 이용해 해당 코드에 주석을 답니다. 복사한 url이 자동으로 붙여넣기 됩니다. <br /> ( `**` 입력 시 자동완성이 활성화 됩니다.)

6. 주석 하단에 solution 코드를 복사 붙여넣기 한 후, 아래의 commit 컨벤션을 지켜 커밋을 남깁니다.

## Commit 컨벤션

- 모든 커밋 메시지는 husky의 [commit-msg](.husky/commit-msg) 검사를 받습니다.
- [commit message template](./docs/.gitmessage.txt)을 활용하실 수 있습니다.

  ```
  git config commit.template ./docs/.gitmessage.txt
  ```

- Description은 자유롭게 남기실 수 있습니다.

#### [Daily] type

```
 [Daily] 문제 이름 / level (0|1|2|3|4)
```

- `[해당 주차]/[닉네임]` Branch에서만 작성 가능합니다.
- 문제풀이 후 커밋을 진행합니다.
- **한 문제 당 한개의 커밋**을 원칙으로 합니다.

#### [Meeting] type

```
 [Meeting] 문제 이름 / level (0|1|2|3|4)
 [Meeting] Update README
```

- `[해당 주차]/meeting/[닉네임]` Branch에서만 작성 가능합니다.
- 문제풀이를 올리거나, README를 수정할 수 있습니다.
- 문제풀이를 올릴 경우 Daily의 규칙 커밋 컨벤션을 적용합니다.
- README를 수정할 경우 Update README 라고 작성합니다.

## PR 컨벤션

- [pull_request_template.md](.github/pull_request_template.md)를 참고 부탁드립니다.
- 해당 템플릿은 아래 코딩 인터뷰 영상을 참고하여 만들어졌습니다.

- **참고 영상**
  - [Amazon Coding Sample(SIP)](https://www.youtube.com/watch?v=mjZpZ_wcYFg)
  - [Senior Software Engineer Mock Technical Interview (Coding/Algorithms in JavaScript)](https://www.youtube.com/watch?v=yju4zwKSriI&t=466s)
