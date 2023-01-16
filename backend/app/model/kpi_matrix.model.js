module.exports = (sequelize, DataTypes) => {
    const tbl_kpi_matrix = sequelize.define('tbl_kpi_matrix',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        title: DataTypes.STRING,
        tooltip: DataTypes.STRING,
        weightage: DataTypes.STRING,
        parent_matrix_kpi: DataTypes.INTEGER,
        kpi_id: DataTypes.INTEGER 
    });
}