
function throwError(message:string):never{
    throw message;
}

function load(value:any){
    let v = 'hello';
    v = <string>value;
}
load(23);




class Animal {
    name!: string;
    constructor(){}
}

function lowercase(optional?: string){
    return optional!.toLowerCase();
}