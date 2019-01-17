function add(x: number, y: number) {
    return x + y;
}


let mathFunction: (x:number, y:number)=>number = add;
mathFunction = (x,y)=>x+y;


export default mathFunction;
