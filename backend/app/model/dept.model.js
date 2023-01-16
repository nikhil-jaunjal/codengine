module.exports = (sequelize, DataTypes) => {
    const tbl_department = sequelize.define('tbl_department',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        name: DataTypes.STRING
    });
}