function calulateResult() {
  let userNumber = document.getElementById("number").value;
  let calculatedPercentage = (userNumber / 750) * 100;
  106;

   console.log(calculatedPercentage);

  if (calculatedPercentage >= 80 && calculatedPercentage < 100) {
    // alert("Congrats Your Grade A+")

    Swal.fire({
      title: "Congrats Your Grade A+",
      text: "That thing is still around?",
      icon: "success",
    });
  } else if (calculatedPercentage >= 70 && calculatedPercentage < 80) {
    // alert("Congrats Your Grade A")

    Swal.fire({
      title: "Congrats Your Grade A",
      text: "That thing is still around?",
      icon: "success",
    });
  } else if (calculatedPercentage >= 60 && calculatedPercentage < 70) {
    // alert("Congrats Your Grade B")

    Swal.fire({
      title: "Congrats Your Grade B",
      text: "That thing is still around?",
      icon: "success",
    });
  } else if (calculatedPercentage >= 50 && calculatedPercentage < 60) {
    // alert("Congrats Your Grade C")

    Swal.fire({
      title: "Congrats Your Grade C",
      text: "That thing is still around?",
      icon: "success",
    });
  } else if (calculatedPercentage >= 40 && calculatedPercentage < 50) {
    // alert(" Congrats Your Grade D")

    Swal.fire({
      title: "Congrats Your Grade D",
      text: "That thing is still around?",
      icon: "success",
    });
  } else {
    // alert("please enter a valid input");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
}
