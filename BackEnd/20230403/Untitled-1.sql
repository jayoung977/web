CREATE DATABASE codingon DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

use codingon;

CREATE TABLE student (
	id VARCHAR(20) NOT NULL PRIMARY KEY,
	name VARCHAR(10) NOT NULL,
    age INT,
	birthday DATE NOT NULL
);

ALTER TABLE student ADD age INT NOT NULL;
ALTER TABLE student MODIFY age VARCHAR(10) NOt NULL;
ALTER TABLE student DROP COLUMN age;

DROP TABLE student;


CREATE TABLE member (
	id VARCHAR(20) NOT NULL PRIMARY KEY,
	name VARCHAR(5) NOT NULL,
	age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x' 
    
);

ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP COLUMN age;
ALTER TABLE member ADD interest VARCHAR(100);

INSERT INTO student (id, name, birthday) VALUE('sarah123','sarah','2023-04-03');
INSERT INTO student VALUES ('kim1234','kim','10','2000-01-01');
INSERT INTO student VALUES ('lee1234','lee','20','2001-01-01');
INSERT INTO student VALUES ('hong1234','hong','30','2002-01-01');
INSERT INTO student VALUES ('lim1234','lim','40','2003-01-01');
INSERT INTO student VALUES ('shim1234','shim','50','2004-01-01');

SELECT * FROM student ORDER BY age ASC;
SELECT * FROM student ORDER BY age DESC LIMIT 2;
SELECT * FROM student WHERE birthday <= '2001-01-01';
SELECT name FROM student WHERE name != 'kim';
SELECT name FROM student WHERE not name = 'kim';
SELECT * FROM student WHERE age BETWEEN 15 AND 25;
SELECT * FROM student WHERE name IN ('kim', 'lee');

-- 앞이 어떤 글자이든지 뒤에 im만 있으면 조건 만족
SELECT * FROM student WHERE name LIKE '%im';
-- 무조건 _포함 글자 수 동일해야 가져옴 
SELECT * FROM student WHERE name LIKE '_im';

UPDATE student SET age = 10 WHERE name = 'kim';



-- student 테이블
-- id : 기본 키
CREATE TABLE student (
	id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    birthday DATE NOT NULL
);

-- class 테이블
-- student_id : 외래 키
CREATE TABLE class (
	id int auto_increment primary key,
    class_name varchar(20),
    student_id varchar(20),
    FOREIGN KEY (student_id) REFERENCES student(id) ON UPDATE CASCADE ON DELETE CASCADE
);