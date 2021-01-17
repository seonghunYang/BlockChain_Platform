var express = require("express");
var router = express.Router();
const catchErrors = require('../lib/async-error');
const User = require('../models/user');

function needAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/signin');
  }
}

function validateForm(form, options) {
  var userID = form.userID || "";
  userID = userID.trim();

  if (!userID || userID.indexOf("@") == -1) {
    return '올바른 이메일 주소를 입력해주세요.';
  }

  if (!form.userPassword || form.userPassword.length < 8) {
    return '올바른 비밀번호를 입력해주세요.';
  }
  return null;
}


/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/home", function (req, res, next) {
  res.send("Home");
});

router.post('/', catchErrors(async(req, res, next) =>  {
  var err = validateForm(req.body, {needPassword: true});
  if (err) {
    req.flash('danger', err);
    return res.redirect('back');
  }
  var user = await User.findOne({email: req.body.userID});
  console.log('USER???', user);
  if(user) {
    req.flash('danger', '이메일이 이미 존재합니다.');
    return res.redirect('back');
  }
  user = new User({
    email: req.body.userID,
    name: req.body.userName
  });
  user.password = await user.generateHash(req.body.userPassword);
  
  await user.save();
  res.redirect('/');
}));

module.exports = router;
