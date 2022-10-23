(()=>{
  const caculateTotal = (prices:number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices:number[]): void => {
    const rta = caculateTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([1,2,3,4,5,6]);
})();
