

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

let counter = <Counter>function (start: number) { };
counter.reset = function () { };


counter(10);
counter.reset();
counter.interval = 5.0;