class shape
{
    constructor(name,side){
    this.name = name;
    this.side=side;
    }
    getShape(){
        return "Name of shape: "+ this.name+ " Number of side: "+ this.side
    }
}
class rectangle extends shape
{
    constructor(length,width, name, side,shape="rectangle"){
        super(name,side)
        this.length=length
        this.width= width
        this.shape= shape

    }
    newShape(){
        const area=this.length*this.width;
        console.log(`Area of ${this.shape}= ` ,area);
    }
}
let c1= new rectangle(15,25)
c1.newShape()

let c2= new shape("rectangle", 4)
console.log(c2.getShape())

