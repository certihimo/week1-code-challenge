const sd = require ("prompt-sync");
const prompt = sd();
function speedDetectors(){
    let speed = prompt("what is the speed?")
    if (speed <= 70){
        console.log("ok")
    }else if(speed > 70 && speed <= 130){
        let demeritPoints = (speed - 70) /5;
        console.log(`Points: ${demeritPoints}`)
    }else if(speed > 130){
        console.log("License suspended");
    }else{"enter the correct speed"}
}
speedDetectors();