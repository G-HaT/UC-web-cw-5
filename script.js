let w8
let hyt 
function BMI(w8,hyt) {
    return ((hyt)^2)/w8 ;
}

console.log(BMI(w8,hyt));

function Status(bmi) {
if (bmi<18.5) {
    return " you are underweight"
}
else if (bmi >=18.5 && bmi<25) {
    return " your weight is healthy"
}
else {
    return " you have an extra weight"
}

}

function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = BMI(weight,height);
    let desc = Status(bmi);
    document.getElementById("result").innerHTML = "bmi is " +bmi + desc



}