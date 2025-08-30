// console.log('connected')

const btn = document.getElementById('button')



btn.addEventListener('click', function () {
    // console.log('button clicked') //check korlam 

    // mobile number set korlam
    const number = 1234567890
    const pin = 1234

    const numberInput = parseInt(document.getElementById('number-input').value)
    const pinInput = parseInt(document.getElementById('pin-input').value)

    // console.log(numberInput, pinInput)

    if (numberInput === number && pinInput === pin) {
        // console.log ('all ok ')
        window.location.href = 'main.html'
    }
    else {
        alert('Incorrect number or pin')
    }


})