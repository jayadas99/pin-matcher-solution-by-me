// console.log('added app.js file')

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // c;
        return getPin();
    }
} 


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random; 
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // console.log(pin);

    // display Pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    // console.log('button clicked');
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber  = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        // const typedNumberField = document.getElementById('typed-numbers');
        // const previousTypedNumber  = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
    
})


document.getElementById('verify-pin').addEventListener('click',function(){
    // console.log('verify pin clicked');
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        // const pinSuccessMessage = document.getElementById('pin-success');
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        // const pinFailureMessage = document.getElementById('pin-failure');
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})