(()=>{
type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  title: String,
  createdAt: Date,
  stock:number,
  size?: Sizes
};

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
}

addProduct({
  title: 'Producto1',
  createdAt: new Date(1993,1,1),
  stock: 12,
});
addProduct({
  title: 'Producto2',
  createdAt: new Date(1994,1,1),
  stock: 12,
  size:'S'
});
products.push({
  title: 'Producto3',
  createdAt: new Date(1995,1,1),
  stock: 12,
  size:'XL'
});
console.log(products)
})();
