const SGG = require("prompt-sync")
const prompt = SGG();
function generator(){
    let grade = prompt('enter your percentage:');
    if(grade <= 100 && grade > 79){
        console.log("Grade is A");
    }else if(grade <= 79 && grade > 59){
        console.log("Grade is B");
    }else if(grade <= 59 && grade > 49){
        console.log("Grade is C");
    }else if (grade <=49 && grade > 39){
        console.log("Grade is D");
    }else if(grade <= 39 && grade >= 0){
        console.log("Grade is E");
    }else{
        console.log("enter the correct percentage")
    }
}generator();