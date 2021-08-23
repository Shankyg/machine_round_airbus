module.exports = {
    HOST: process.env.RDS_HOSTNAME||"localhost",
    USER: process.env.RDS_USERNAME||"postgres",
    PASSWORD: process.env.RDS_PASSWORD||"1234",
    DB: process.env.RDS_DB_NAME||"postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };