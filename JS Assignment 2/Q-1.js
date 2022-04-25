class shape
{
    constructor(name,side){
    this.name = name;
    this.side=side;
    }
    getShape(){
        let total= "Name of shape: "+ this.name+ "<br>"+" Number of side: "+ this.side
        console.log(total);
        document.getElementById("Q1_results").innerHTML = total

    }
}
class rectangle extends shape
{
    constructor(length,width,name,side){
        super(name,side)
        this.length=length
        this.width= width
    }
    newShape(){
        let area=`Area of ${this.name}: `+this.length*this.width+" sq units"
        console.log(area);
        document.getElementById("Q1_results2").innerHTML = area
    }
}
let c1= new rectangle(15,25,"rectangle",4)
c1.getShape()
c1.newShape()
