(()=> {
  type UserID = string | number | boolean
  let userId: UserID;

  function greetings(userId: UserID){
    if(typeof userId === 'string'){
      console.log(`String ${userId.toLocaleLowerCase()}`)
    }
  }

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function tamaño(userId: UserID, size: Sizes){
    if(typeof userId === 'string'){
      console.log(`String ${userId.toLocaleLowerCase()}`)
    }
  }

  tamaño(1111,'S');
  tamaño('sadsa','XL');
})();
