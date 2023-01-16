const dbConfig = require("./db.config.js");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  logging: true,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false
}
});
sequelize.authenticate().then(()=>{console.log('connected to database')}).catch(err=> console.log('err =>', err));
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

db.sequelize
  .sync({force: true})
  .then(()=>{console.log('synced')});

  db.tbl_department = require('../model/dept.model')(sequelize, DataTypes);
  db.kpi_matrix = require('../model/kpi_matrix.model')(sequelize, DataTypes);
  db.tbl_kpi = require('../model/kpi.model')(sequelize, DataTypes);

  db.tbl_kpi.hasOne(db.tbl_department,{foreignKey: 'departmentId'});
  db.tbl_department.belongsTo(db.tbl_kpi);

  db.kpi_matrix.hasOne(db.tbl_kpi,{foreignKey: 'kpi_id'});
  db.tbl_kpi.belongsTo(db.kpi_matrix);