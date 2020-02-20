// Department Model
module.exports = (sequelize,DataTypes) => {

  let Department = sequelize.define('departments', {
    name: DataTypes.STRING,
    overheadCosts: DataTypes.FLOAT,
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
  });
  
    // Provide point for associations 
    Department.associate = (db) => {
      // Department has a one-to-many relationship with Products
      db.departments.hasMany(db.products,{as: 'Products'})
    }

      // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
      Department.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Department.addHook("beforeCreate", function(department) {
    department.password = bcrypt.hashSync(department.password, bcrypt.genSaltSync(10), null);
  });

  return Department
}