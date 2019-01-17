

interface Dictonary {
    [key: string]: string
}

interface List {
    [index: number]: any,
    length: number
    reset: ()=>void
}

function logDictionary(d:Dictonary){
    let a = d['hello'];
    return a.bold();
}