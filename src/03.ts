interface Named {
    name: string;
}

class Person implements Named{
    name: string = ''
}

let named: Named;

named = new Person();


export default {};

