# Future English Academy 웹사이트

영어 학원을 위한 반응형 웹사이트입니다. 이 웹사이트는 학원의 프로그램을 소개하고 상담 신청을 받을 수 있는 기능을 제공합니다.

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 프로그램 소개
- 강사 프로필
- 상담 신청 폼
- 위치 정보

## 기술 스택

- HTML5
- CSS3 (반응형 디자인, Flexbox, Grid)
- JavaScript (ES6+)
- Google Fonts (Noto Sans KR, Inter)

## 설치 및 실행

1. 저장소를 클론합니다:
```bash
git clone [repository-url]
```

2. 프로젝트 디렉토리로 이동:
```bash
cd future-english-academy
```

3. 웹 서버로 실행:
로컬 웹 서버를 사용하여 `index.html` 파일을 실행합니다.

## 프로젝트 구조

```
future-english-academy/
├── index.html
├── styles.css
├── script.js
├── images/
│   └── teacher.jpg
└── README.md
```

## 커스터마이징

1. 내용 수정:
   - `index.html` 파일에서 텍스트 내용을 수정
   - 프로그램 정보, 강사 정보 등을 업데이트

2. 스타일 수정:
   - `styles.css` 파일에서 색상, 폰트 등을 변경
   - CSS 변수를 통해 테마 색상 쉽게 변경 가능

3. 기능 수정:
   - `script.js` 파일에서 폼 제출 로직 등을 수정
   - 필요한 JavaScript 기능 추가

## 주의사항

- 이미지 파일은 최적화하여 사용
- 실제 배포 시 폼 제출 로직 구현 필요
- API 키 등 민감한 정보는 환경 변수로 관리

## 라이선스

MIT License 