-- 데이터베이스 목록 확인
SHOW databases;

-- codingon 데이터베이스 선택
USE codingon;

-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 user 테이블이 있다면 기존 테이블 지움


-- TODO: user 데이터베이스 생성
USE codingon;
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL auto_increment,
  userid VARCHAR(20) NOT NULL,
  name VARCHAR(10) NOT NULL,
  pw VARCHAR(20) NOT NULL
);

SHOW tables;

-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
USE codingon;
DESC user; 

-- user 테이블 데이터 조회
USE codingon;
SELECT * FROM user;