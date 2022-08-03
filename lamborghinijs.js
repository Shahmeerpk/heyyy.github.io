 // AMOUNT ENTER
 function amountenter() {
    var amount = parseInt(prompt("Enter your amount"))

    if (amount >= 417826) {
        alert("'Lets do the paper work'")


    }
    else if (amount >= 300000) {
        alert("Thanks for visiting sir but amount is 417826$")
    }
    else if (amount >= 150000) {
        alert("You are not eligible to get adventor")
    }
    else {
        alert("You are poor just go back and do some work")
    }

}