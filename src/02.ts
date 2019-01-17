

interface Person {
    name: string,
    surname: string,
    age?: number
}

let p: Person = {
    name: 'Nicolas',
    surname: 'Laplume'
};

p.name;

export default Person;

