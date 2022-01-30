'use strict'

function Phone (brand, model, makeYear, isNfc, price) {
    this.brand = brand;
    this.model = model;
    this.makeYear = makeYear;
    this.isNfc = isNfc;
    this.price = price;
  }
  
  const phones = [];
  
  for(let i = 0; i < 20; i++) {
    const phone = new Phone(
      Math.random()>0.5 ? 'IPhone' : 'Samsung',
        `Series ${Math.trunc(Math.random() * 20)}`,
        2015 + Math.trunc(Math.random() * 8),
        Math.random() > 0.5,
        3000 + Math.trunc(Math.random() * 7000)
  );
  phones.push(phone);
}

console.log('phones :>> ', phones);
    
function expensivePhones(item, index, arr){
    return item.price > 8000;
}

console.log('phone 8000 :>> ', phones.filter( item => item.price > 8000) );

console.log( 'gold :>>', phones.some( item => item.color === 'gold' ) );

console.log( '2018Year :>>', phones.filter ( item => item.makeYear === 2018 ) );

console.log( 'earler2013 :>>', phones.every ( item => item.makeYear > 2013 ) );

phones.forEach( phone => console.log(`${phone.brand} ${phone.model} ${phone.makeYear}`));

phones.forEach( phone => console.log(`${phone.brand} ${phone.model} ${phone.makeYear}`));



