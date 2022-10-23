(()=> {
  let userId: (string | number);
  userId = 123;
  userId = 'Holi';

  function greetings(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`String ${myText.toLocaleLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }

  greetings('CARLOS');
  greetings(12.345679);

})();
