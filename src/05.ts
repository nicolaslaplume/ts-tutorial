function isString(s:any): s is string {
    return typeof s === 'number';
}


function pad(s:string, padString:string):string;
function pad(s:string, padCount:number):string;
function pad(s:string, pad:string|number){
    if (isString(pad)){
        return s + pad;
    } else {
       return s + (' '.repeat(pad));
    }
}


pad('Hello', '-');
pad('Hello', 5);


export default pad;