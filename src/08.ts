
function identity<T>(value:T):T {
    return value;
}


let v = identity(2);




interface hasLength {
    length: number
}

function logLength<T extends hasLength>(item: T){
    console.log(item.length);
}

//logLength({});
logLength([1,2,3]);
logLength({length: 2});

export default identity;