(()=> {
  let prices = [1,2,3,4,5,6,7,8,'hola',true];
  // prices.push('adsa');
  // prices.push(true);
  // prices.push({});
  prices.push(12321);
  prices = [6,4,7,8];

  let products = ['hola',true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] =['hola',true];
  mixed.push(123);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,6,7,8];
  numbers.map(item => item*2);

})();
