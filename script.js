
const billDivideForm = document.getElementById('bill-divider-form');

billDivideForm.addEventListener('submit', billDividerHandler);

function billDividerHandler(event){
    event.preventDefault();
    const inputs = getInputs();
    showCalculatedOutput(inputs);
}

// get all the inputs for the bill divider
function getInputs(){
    let subtotal = document.getElementById('subtotal').value;
    let tipPercent = document.getElementById('tip').value;
    let noOfPerson = document.getElementById('no-of-person').value;
    return {subtotal, tipPercent, noOfPerson};
}

//calculate the bill divider info
function showCalculatedOutput(input){
    billDivideForm.reset();

    let totalTip = (parseFloat(input.subtotal) * parseFloat(input.tipPercent)) / 100;
    let totalAmount = parseFloat(input.subtotal) + totalTip;
    let tipPerPerson = totalTip / parseFloat(input.noOfPerson);
    let billPerPerson = totalAmount / parseFloat(input.noOfPerson);
    // console.log(totalTip, totalAmount, tipPerPerson, billPerPerson);

    document.getElementById('total-bill').innerHTML = `Rs ${totalAmount.toFixed(2)}`;
    document.getElementById('bill-per-person').innerHTML = `Rs ${billPerPerson.toFixed(2)}`;
    document.getElementById('total-tip').innerHTML = `Rs ${totalTip.toFixed(2)}`;
    document.getElementById('tip-per-person').innerHTML = `Rs ${tipPerPerson.toFixed(2)}`;
}
