

interface HasPhone {
    name: string,
    phone: number
}

interface HasAddress {
    name: number,
    address: string
}


declare let person: HasAddress & HasPhone;

person.address;
person.name;
person.phone;

function doSomething(value: HasAddress | HasPhone){
   return value;
}



