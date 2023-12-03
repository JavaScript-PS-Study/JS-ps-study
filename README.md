# JavaScript PS Study

자바스크립트를 이용한 코딩테스트 문제 풀이 레포지토리입니다.

## ✨ 진행 기간

> 2023년 11월 24일 ~ 12월 15일 (한 달) <br />
> OT : 11월 23일 (목) 오전 10시 디스코드

- **Week1** : 11월 23일 ~ 11월 24일
- **Week2** : 11월 27일 ~ 12월 1일
- **Week3** : 12월 4일 ~ 12월 8일
- **Week4** : 12월 11일 ~ 12월 15일

## 🔥스터디 목표

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

## Branch & Commit 컨벤션

- Daily, Meeting, Fix 타입이 존재합니다. 각 타입에 따라 할 수 있는 행동이 제한되어 있습니다.

### [Daily] type

- **Commit convention**

  ```
   [Daily] 문제 이름 / level [1-5] # Programmers
   [Daily] 문제 이름 / Unrated|Bronze|Silver|Gold|Platinum|Diamond|Ruby # 백준
  ```

- **Branch Convention** : `[닉네임]/daily`
- **문서 작성 폴더 위치** : `[닉네임]/daily`
- 문제 풀이 타입입니다. **문제 풀이 후 컨벤션을 지켜 origin으로 PR**합니다.
- **PR시 하나의 문제에 대해서만 PR**이 가능합니다.
  - A 문제를 여러번 커밋한 후 PR 가능
  - A 문제에 대한 커밋이 있을 경우 B 문제에 대해 커밋하는것은 불가능 → A에 대해 PR후 B문제 커밋
  - PR시 코드리뷰를 용이하게 하기 위함

### **[Meeting] type**

- **Commit convention**

```
 [Meeting] 문제 이름 / level [1-5]
 [Meeting] Update README
```

- **Branch Convention** : `[닉네임]/meeting`
- **문서 작성 폴더 위치** : `[닉네임]/meeting`
- **문제풀이**를 올리거나, **발표용 README를 수정**할 수 있습니다.
- 문제풀이를 올릴 경우 Daily의 규칙 커밋 컨벤션을 적용합니다.
- README를 수정할 경우 Update README 라고 작성합니다.
- 미팅 전 까지 origin에 PR완료합니다.

### **[Fix] type**

```
[Fix] 고친부분 설명 / #issuNumber
```

- **Branch convention** : `fix/[고칠 내용 키워드]`
- 스터디 레포의 시스템에 문제가 있을 때 사용합니다.

### 공통 사항

- 모든 커밋 메시지는 husky의 [commit-msg](https://github.com/JavaScript-PS-Study/JSPS/blob/main/.husky/commit-msg) 검사를 받습니다.
- [commit message template](https://github.com/JavaScript-PS-Study/JSPS/blob/main/docs/.gitmessage.txt)을 활용하실 수 있습니다.

  ```
  git config commit.template ./docs/.gitmessage.txt

  ```

- 모든 커밋의 Description은 자유롭게 남기실 수 있습니다.

## ✈️ 참여 방법

1. 해당 레포지토리를 로컬에 Clone 합니다.
   husky와 Prettier 설치를 위해 필요 의존성을 다운로드 합니다.

   ```
   git clone https://github.com/JavaScript-PS-Study/JSPS.git
   ```

   ```
   npm ci
   ```

2. 해당 Repo에 컨벤션을 지켜 자신의 브랜치를 생성 후 체크아웃합니다.

   ```
   git branch -b [닉네임]/(daily|meeting)
   ```

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

4. 문제를 푼 후, 풀이한 **문제의 제목을 파일 제목으로 설정**합니다. 예시) [`두-수의-차.js`](./W1/template/daily/두-수의-차.sample.js)

5. 미리 설정되어 있는 [Snippets](.vscode/snippet.code-snippets) 을 이용해 해당 코드에 주석을 답니다. 복사한 url이 자동으로 붙여넣기 됩니다. <br /> ( `**` 입력 시 자동완성이 활성화 됩니다.)

6. 주석 하단에 solution 코드를 복사 붙여넣기 한 후, 아래의 컨벤션을 지켜 커밋을 남깁니다.

## PR 템플릿

- [pull_request_template.md](.github/pull_request_template.md)를 참고 부탁드립니다.
- 해당 템플릿은 아래 코딩 인터뷰 영상을 참고하여 만들어졌습니다.

- **참고 영상**
  - [Amazon Coding Sample(SIP)](https://www.youtube.com/watch?v=mjZpZ_wcYFg)
  - [Senior Software Engineer Mock Technical Interview (Coding/Algorithms in JavaScript)](https://www.youtube.com/watch?v=yju4zwKSriI&t=466s)

## 스터디의 시스템에 의견이나 문제가 있다면?

- Issue로 등록해서 알려주세요!

## 참여자

<table>
    <td align="center">
      <a href="https://github.com/Seo0H">
          <img src=https://avatars.githubusercontent.com/u/108770949?v=4" width="100px;" alt=""/>
          <br />
          <sub><b>SEO</b></sub>
          <br />
          <sub>Group leader</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/g2hhh2ee">
          <img src=https://avatars.githubusercontent.com/u/57996351?s=88&v=4" width="100px;" alt=""/>
          <br />
          <sub><b>JiHee Han</b></sub>
          <br />
          <sub>Participants</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/minh0518">
          <img src=https://avatars.githubusercontent.com/u/78631876?s=88&v=4" width="100px;" alt=""/>
          <br />
          <sub><b>조민호</b></sub>
          <br />
          <sub>Participants</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/syeonnn">
          <img src="https://avatars.githubusercontent.com/u/68735700?s=88&v=4" width="100px;" alt=""/>
          <br />
          <sub><b>Seoyeon Park</b></sub>
          <br />
          <sub>Participants</sub>
      </a>
    </td>
</table>
