module.exports = (sequelize, DataTypes) => {
    const tbl_kpi = sequelize.define('tbl_kpi',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        name: DataTypes.STRING,
        decription: DataTypes.STRING,
        departmentId: DataTypes.INTEGER,
        hasSelfReview: DataTypes.BOOLEAN
    });
}