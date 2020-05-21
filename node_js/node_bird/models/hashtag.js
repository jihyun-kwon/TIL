module.exports = (sequelize, DataTypes) => (
  sequelize.define('hashtag', {
      title: {
          type: DataTypes.STRING(15),
          allowNull: false,
          unique: true,
      },
  }, {
      timestamps: true,
      paranoid: true
  })
);

// 태그이름을 저장하는 hashtag 모델. 나중에 태그로 검색하기 위해 따로 모델이 있는 것.