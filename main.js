

const btn = document.getElementById("button");
const AvailableBalance = document.getElementById('available-balance')
let accountNumber = 12345678901;
let pingNumber = 1234;

// add money 

btn.addEventListener('click', function () {

    const banks = document.getElementById('select').value;
    const account = document.getElementById('account').value;
    const ping = parseInt(document.getElementById('ping').value);

    if (account.length < 11) {
        alert('Please enter a valid account number');
        return;
    }

    if (ping !== pingNumber) {


        alert('Please enter a valid ping number');
        return;
    }
    const amount = parseInt(document.getElementById('amount').value)
    // console.log(banks, account, amount, ping)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    // console.log(availableBalance)
    const total = amount + availableBalance;
    document.getElementById('available-balance').innerText = total
})



// toggle

document.getElementById('card1').addEventListener('click', function () {

    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('Add-money').style.display = 'block';
    
});
document.getElementById('card2').addEventListener('click', function () {

    document.getElementById('Add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'block';

});












// cashout js
document.getElementById('cashout-button').addEventListener('click', function () {

    const balance = parseInt(document.getElementById('available-balance').innerText)
    const agentNumber = (document.getElementById('cashout-agent-number').value)
    const amount = parseInt(document.getElementById('cashout-amount').value)
    const pinInput = parseInt(document.getElementById('cashout-pin').value)

    // console.log(balance, agentNumber, amount, pinInput)

    if (agentNumber.length < 11) {
        alert('Invalid agent number. Please enter a valid agent number.');
        return;
    }

    let newamount = balance - amount
    document.getElementById('available-balance').innerText = newamount

    if (pinInput !== pin) {
        alert('Incorrect Pin ,Please Enter a valide PIN')
        return;
    }


})