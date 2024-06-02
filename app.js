function calulateResult() {
        let userNumber = document.getElementById('number').value
        let calculatedPercentage = userNumber / 750 * 100;  //106
        console.log(calculatedPercentage)
        if (calculatedPercentage >= 80) {
            alert("You got A+ congrats")
        }
        else if (calculatedPercentage >= 70) {
            alert("You got A congrats")
        }
        else if (calculatedPercentage >= 60) {
            alert("You got B congrats")
        }
        else if (calculatedPercentage >= 50) {
            alert("You got C congrats")
        }
        else if (calculatedPercentage >= 40) {
            alert(" You got D congrats")
        }
        else {
            alert("please enter a valid input")
        }
        console.log(userNumber)
       
    }