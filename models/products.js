// Product Model
module.exports = (sequelize, DataTypes) => {

  let Product = sequelize.define('products', {
    name: DataTypes.STRING,
    inventoryNum: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stockQty: DataTypes.INTEGER,
    totalSales: DataTypes.FLOAT
  }, {
    // Model tableName will be the same as the model name instead of being pluralized
    freezeTableName: true
  })

  // Provide point for associations 
  Product.associate = (db) => {
    // product has a one-to-many relationship with cart-items
    db.products.hasMany(db.cartitems, { as: 'CartItems' })
  }

  return Product
}