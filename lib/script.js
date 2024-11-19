//Calculates the amount of time, interest, and amounts used to increase money over time and returns that value based on user input.
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
//If/else statement to return values based on input, and provides an alert if a number is missing from user input.
    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}

//Updates the rate based on user input. 
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

//Creates real-time updates on the Rate slider for the user to have easer tracking as they increase or decrease.
    const slider = document.getElementById("rate");
    const sliderValue = document.getElementById("rate_val");

    slider.addEventListener("input", function() {
        sliderValue.textContent = this.value;
    });
}