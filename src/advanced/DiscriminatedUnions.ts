
enum Shapes {
    RECTANGLE,
    CIRCLE
}


interface RectangleShape {
    shape: Shapes.RECTANGLE,
    width: number,
    height: number
}

interface CircleShape {
    shape: Shapes.CIRCLE,
    radius: number
}

function area(s: RectangleShape | CircleShape){
    switch(s.shape){
        case Shapes.RECTANGLE:
            return s.width * s.height;
        case Shapes.CIRCLE:
            return Math.PI * s.radius ** 2;
    }
}