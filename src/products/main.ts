import { createProduct, products, calculateStock, } from "./product.service";

createProduct({
  name: 'Producto1',
  createdAt: new Date(1993,1,1),
  stock: 5,
});

createProduct({
  name: 'Producto2',
  createdAt: new Date(1994,1,1),
  stock: 6,
  size:'S'
});
console.log(products);
const total = calculateStock();
console.log(total);
