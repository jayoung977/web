const models = require("../models"); //index (이미 index에서 visitor,user 연동됨)

exports.signup = (req, res) => {
  // res.render("signup");
  const userSession = req.session.userid;
  // console.log("main GET / userSession>> ", userSession);
  if (userSession !== undefined) {
    res.render("signup", { isLogin: true, userid: userSession });
  } else {
    res.render("signup", { isLogin: false });
  }
};

//(1) 생성 `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`;
exports.post_signup = async (req, res) => {
  const result_1 = await models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  });
  console.log("(1)-1 Cuser.js  >> ", result_1);
  if (!result_1) {
    // 로그인 성공; views/profile.ejs 렌더링
    const result_2 = await models.User.create({
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });

    console.log(" (1)-2 Cuser.js create >> ", result_2);
    res.send(true);
  } else {
    // 로그인 실패; /user/signin 현재 주소 다시 접속
    res.send(false);
  }
};

exports.signin = (req, res) => {
  // res.render("signin");
  console.log("main GET / req.session>> ", req.session);
  const userSession = req.session.userid;
  // console.log("main GET / userSession>> ", userSession);
  if (userSession !== undefined) {
    res.render("signin", { isLogin: true, userid: userSession });
  } else {
    res.render("signin", { isLogin: false });
  }
};

//(2) 하나 조회 `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
exports.post_signin = async (req, res) => {
  console.log(" (2)-1 하나 조회 Cuser.js  >> ", req.body);
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  console.log("(2) 하나 조회 Cuser.js post_signin >> ", result);
  //로그인 성공: result = {}
  //로그인 실패: result = null
  if (result) {
    //세션 설정
    req.session.userid = req.body.userid;
    console.log("req.session >>>", req.session); //응답은 나중에

    res.send(true);
  } else {
    res.send(false);
  }
};

// (3) 로그인한 유저 한 명을 가져옴!
//`SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
exports.post_profile = async (req, res) => {
  console.log("(3)-1 로그인한 유저 한 명을 가져옴!  Cuser.js  >> ", req.body);

  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  });
  console.log("(3)-2 Cuser.js  >> ", result);
  if (result) {
    // 로그인 성공; views/profile.ejs 렌더링
    res.render("profile", { isLogin: true, data: result.dataValues }); //data: result도 됨
  } else {
    // 로그인 실패; /user/signin 현재 주소 다시 접속
    res.redirect("/user/signin");
  }
};

// (4) 수정
// `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
exports.edit_profile = async (req, res) => {
  const result = await models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  );
  console.log(" (4)  Cuser.js update >>", result);
  res.send("회원정보 수정 성공!");
};
// (5) 삭제
//`DELETE FROM user WHERE id='${id}'`
exports.delete_profile = async (req, res) => {
  const result = await models.User.destroy({
    where: { id: req.body.id },
  });
  console.log(" (5) 삭제 Cuser.js DELETE >>", result);
  const userSession = req.session.userid;
  console.log("get_signout userSession", userSession);
  if (userSession !== undefined) {
    //[로그아웃] 링크를 클릭하면 세션 삭제

    req.session.destroy((_) => {
      console.log("(5) 삭제 Cuser.js DELETE || req.session", req.session);
      // / 경로로 이동
      res.send(true);
    });
  } else {
    res.send(`
      <script>
        alert('잘못된 접근임!!')
        document.location.href = '/'
      </script>
  `);
  }

  // res.send(true);
};

exports.get_signout = (req, res) => {
  // logout 버튼 안누르고 주소창에 logout입력했을 때 막는 법 if else
  //세션 읽기(사용)
  const userSession = req.session.userid;
  console.log("get_signout userSession", userSession);

  if (userSession !== undefined) {
    //[로그아웃] 링크를 클릭하면 세션 삭제

    req.session.destroy((_) => {
      console.log("GET /logout || req.session", req.session);
      // / 경로로 이동
      res.redirect("/");
    });
  } else {
    res.send(`
      <script>
        alert('잘못된 접근임!!')
        document.location.href = '/'
      </script>
  `);
  }
};
