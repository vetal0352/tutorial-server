module.exports = {
    HOST: "localhost",
    USER: "localadmin",
    PASSWORD: "2lqsym2",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};