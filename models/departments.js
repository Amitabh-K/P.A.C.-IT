// Department Model
module.exports = (sequelize, DataTypes) => {
  let Department = sequelize.define("department", {
    name: DataTypes.STRING,
    commission: DataTypes.FLOAT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  // Provide point for associations
  Department.associate = db => {
    // Department has a one-to-many relationship with Products
    db.department.hasMany(db.products, { as: "Products" });
  };

  return Department;
};
