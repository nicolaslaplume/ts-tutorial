

type EasingFunctions = 'ease-in' | 'ease-out' | 'ease-in-out';

function animate(start: number, end: number, time: number, ease: EasingFunctions){
    switch(ease){
        case 'ease-in':
            break;
        case 'ease-out':
            break;
        case 'ease-in-out':
            break;
    }
}

animate(1,10,20,'ease-in');

type Roll = 1 | 2;
let r:Roll = 1;
//if (r !== 1 || r !== 2){}
