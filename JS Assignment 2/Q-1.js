class shape
{
    constructor(name,side){
    this.name = name;
    this.side=side;
    }
    getShape(){
        return "Name of shape: "+ this.name+ "<br>"+" Number of side: "+ this.side
    }
}
class rectangle extends shape
{
    constructor(length,width,name, side){
        super(name,side)
        this.length=length
        this.width= width
    }
    newShape(){
        return `Area of ${this.name}: `+this.length*this.width+" sq units"
    }
}
let c1= new rectangle(15,25,"rectangle",4)
console.log(c1.getShape())
console.log(c1.newShape())
document.getElementById("Q1_results").innerHTML = c1.getShape()
document.getElementById("Q1_results2").innerHTML = c1.newShape()
