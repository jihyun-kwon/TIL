const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델들을 시퀄라이즈에 등록하기
db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.HashTag = require('./hashtag')(sequelize, Sequelize);

db.User.hasMany(db.Post);   // User와 Post모델은 1:N관계에 있으므로 hasMany와 belongsTo로 연결되었어요
db.Post.belongsTo(db.User); // 시퀄라이즈는 Post모델에 userId컬럼을 추가합니다

db.Post.belongsToMany(db.HashTag, {through:'PostHashTag'}); // Post와 HashTag 모델은 N:M 관계.
db.HashTag.belongsToMany(db.Post, {through:'PostHashTag'}); // 게시글 하나는 해시태그 여러갤 갖고, 해시태그 하나도 게시글 여러개를 갖기 때문

db.User.belongsToMany(db.User, {    // N:M관계이므로 자동적으로 Follow 테이블이 생성되는 것.
   foreignKey: 'followingId',       // 유저 한명이 팔로워 여러명을 갖고, 여러명을 팔로잉 가능 === USer와 User 사이의 N:M 관계
   as: 'Followers',
   through: 'Follow',
});
db.User.belongsToMany(db.User, {
   foreignKey: 'followerId',
   as: 'Followings',
    through: 'Follow',
});

module.exports = db;