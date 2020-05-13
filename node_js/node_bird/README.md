* NodeJS Express로 만드는 SNS 서비스

- 노드, 익스프레스, npm 오픈 소스 등을 사용해서 만드는 간단한 SNS 서비스

- 기능 : 로그인, 이미지 업로드, 게시글 작성, 해시태그 검색, 팔로잉

- 주목적 : 200자의 단문 메시지를 보내고 메시지를 공유하는 것 

--------------------------

- 파일 및 폴더 구성
views 폴더 : 템플릿 파일
routes 폴더 : 라우터 파일
public 폴더 : 정적 파일
passport 폴더 : passport 패키지용 
app.js 파일 : 익스프레스 서버 코드가 담길 파일

---------------------------

bin/www가 필요한 이유 : 콘솔에서 실행 가능한 명령어로 만들기 위
dotenv 패키지 : cookieParser, express-session의 비밀키는 유출 위험이 있으므로 별도로 관리해야한다. 
이를 위한 패키지가 dotenv. 비밀키는 .env에 모아두고, dotenv가 .env파일을 읽어 process.env에 넣는 것

config.js : 시퀄라이즈 설정을 담아두없음. JSON파일이라 process.env를 쓸 수 없어 하드코딩된 비밀번호를 써야하는 게 단점이나, 방법은 있음