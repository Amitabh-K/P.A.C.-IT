// Department Model
module.exports = (sequelize,DataTypes) => {

  let Department = sequelize.define('departments', {
    name: DataTypes.STRING,
    overheadCosts: DataTypes.FLOAT
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  });
  
    // Provide point for associations 
    Department.associate = (db) => {
      // Department has a one-to-many relationship with Products
      db.departments.hasMany(db.products,{as: 'Products'})
    }

  return Department
}