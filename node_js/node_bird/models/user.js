module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
        nick: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        provider: {
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 'local',
        },
        snsId: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
    }, {
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
);

// 사용자 정보를 저장하는 모델. 이메일, 닉, 비밀번호 저장.
// SNS 로그인을 하였을 경우에는 procider, snsId를 저장. provider가 local이면 로컬로그인을 한 것이고, kakao면 카카오 로그인을 한 것.
// 기본적으로 로컬로그인이라 가정해서 defuaultValue를 local로 주었다
// 테이블 옵션으로 timestamps, paranoid 가 true이므로 createdAt, updatedAt, deletedAt 컬럼도 생성됨