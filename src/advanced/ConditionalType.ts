

declare function f<T extends boolean>(x: T): T extends true ? string : number;
let a = f(true);
let b = f(false);
let c = f(Math.random()>0.5);





declare function lookup<T extends string | string[]>(id: T): T extends string? number: number[];
let id = lookup('id');
let ids = lookup(['id1', 'id2']);


