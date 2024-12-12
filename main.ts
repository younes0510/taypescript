interface Vehicle {
name:String;
model:String;
year:Number;
start():void;
}

const car : Vehicle ={
    name: "audi",
    model:"RS7",
    year : 2024,

    start: () => {
console.log("car engine started")
    }
}

car.start()
console.log(car)