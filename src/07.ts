enum Directions {
    UP,
    DOWN ,
    LEFT ,
    RIGHT 
}

enum Colors {
    RED = '#ff0000',
    GREEN = '#00ff00',
    BLUE = '#0000ff'
}

enum FileAccess {
    Read    = 1 << 1,
    Write   = 1 << 2
}

function write(text:string, color:Colors):void{}
write('Hello!', Colors.RED);


function move(dir:Directions, distance: number){
    console.log('Moving to '+ Directions[dir] );// 'Moving to UP'
}
move(Directions.UP, 5); // 'Moving to UP'

export default move;