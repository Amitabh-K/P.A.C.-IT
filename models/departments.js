// Department Model
module.exports = (sequelize,DataTypes) => {

  let Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    commission: DataTypes.FLOAT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  }); 
  
    // Provide point for associations 
    Department.associate = (db) => {
      // Department has a one-to-many relationship with Products
      db.Department.hasMany(db.products,{as: 'Products'})
    }

  return Department
}