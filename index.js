const inputNumber = document.querySelector("#take-number")
const romanOutput = document.querySelector("#roman-output")
const checkButton = document.querySelector("#checkbtn")

var object = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}


checkButton.addEventListener("click", function roman() {
    let result=''
    let userNum=inputNumber.value
    for(let key in object){
        if(userNum>=object[key]){
            result=result+key.repeat(userNum/object[key])
            userNum=userNum%object[key]
            romanOutput.innerText=result
        }
        
    }
})

