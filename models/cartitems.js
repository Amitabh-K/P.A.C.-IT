// Cart-items Model
module.exports = (sequelize, DataTypes) => {

  let CartItems = sequelize.define('cartitems', {
    deptId : DataTypes.INTEGER,
    prodName: DataTypes.STRING,
    inventoryNum: DataTypes.STRING,
    description: DataTypes.STRING,
    unitPrice: DataTypes.FLOAT,
    qty: DataTypes.INTEGER
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

  // Provide point for associations 
  CartItems.associate = (db) => {
    // no association
  }

  return CartItems
}