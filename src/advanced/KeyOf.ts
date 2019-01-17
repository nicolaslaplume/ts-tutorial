interface Person {
    name: string;
    age: number;
    location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"


type Partially<T> = {
    [P in keyof T]? : T[P];
}

function createPerson(config: Partially<Person>){}

createPerson({
    name: 'Nicolas'
});




let readonlyPerson: Readonly<Person>;
let partialPerson: Partial<Person>;
let pickedPerson: Pick<Person, 'name'>;