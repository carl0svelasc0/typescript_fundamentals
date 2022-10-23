(()=>{
  const login = (data: {email:string,password:number}) => {
    console.log(data.email,data.password);
  }

  // login('nico@nico.co','121321231')
  login({
    email: 'nico@nico.co',
    password: 121212
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: String,
    createdAt: Date,
    stock:number,
    size?: Sizes
  }) => {
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
  console.log(products)

})();
