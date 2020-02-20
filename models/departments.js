// Department Model
module.exports = (sequelize,DataTypes) => {

  let Department = sequelize.define('departments', {
    name: DataTypes.STRING,
    overheadCosts: DataTypes.FLOAT,
<<<<<<< HEAD
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
=======
    email: DataTypes.STRING
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
>>>>>>> c300404e078a96b9823223bb8e2fda227ea8f16a
  });
  
    // Provide point for associations 
    Department.associate = (db) => {
      // Department has a one-to-many relationship with Products
      db.departments.hasMany(db.products,{as: 'Products'})
    }

<<<<<<< HEAD
      // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
      Department.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Department.addHook("beforeCreate", function(department) {
    department.password = bcrypt.hashSync(department.password, bcrypt.genSaltSync(10), null);
  });

=======
>>>>>>> c300404e078a96b9823223bb8e2fda227ea8f16a
  return Department
}