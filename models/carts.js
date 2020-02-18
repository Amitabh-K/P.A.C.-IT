// Cart Model
module.exports = (sequelize, DataTypes) => {

  let Cart = sequelize.define('carts', {
    orderDate: DataTypes.DATE,
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

  // Provide point for associations 
  Cart.associate = (db) => {
    // Cart has a one-to-many relationship with cart-items
    db.carts.hasMany(db.cartitems, { as: 'CartItems' })
  }

  return Cart
}