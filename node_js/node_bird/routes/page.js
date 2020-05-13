const express = require('express');

const router = express.Router();

router.get('/profile', (req, res) => {
   res.render('profile', {title: '내 정보 - NodeBird', user: null});
});

router.get('/join', (req, res) => {
   res.render('join', {
       title: '회원가입 - NodeBird',
       user: null,
       joinError: req.flash('joinError'), // flash : 에러메시지 보여주는 용도
   });
});

router.get('/', (req, res, next) => {
    res.render('main', {
       title: 'NodeBird',
       twits: [],
       user: null,
       loginError: req.flash('loginError'),  //  flash : 에러메시지 보여주는 용도
    });
});

module.exports = router;