

const AvailableBalance = document.getElementById('available-balance')
let accountNumber = 12345678901;
let pingNumber = 1234;

const transactionData = []

function historyDetails() {
    const data = {
        name: 'Cash Out ',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
}

// available balance 
function availableBalance(id) {
    const balance = parseInt(document.getElementById(id).innerText)
    return balance
}

//  ping number & aitak number e convert korlam 
function pin(id) {
    const pin = parseInt(document.getElementById(id).value)
    return pin
}
// amount 
function amount(id) {
    const amount = parseInt(document.getElementById(id).value)
    return amount
}

// agent number 
function agent(id) {
    const agent = parseInt(document.getElementById(id).value)
    return agent
}

// add money  
document.getElementById("button").addEventListener('click', function () {

    const account = document.getElementById('account').value;
    const ping = pin('ping');

    if (account.length < 11) {
        alert('Please enter a valid account number');
        return;
    }

    if (ping !== pingNumber) {

        alert('Please enter a valid ping number');
        return;
    }

    const amount = amount('amount')
    // console.log(banks, account, amount, ping)
    const available = availableBalance('available-balance')
    // console.log(availableBalance)
    const total = amount + available;
    document.getElementById('available-balance').innerText = total

    // input field reset korlam 
    document.getElementById('amount').value = "";
    document.getElementById('ping').value = "";

    // add money data save rakar jonno variable creat korlam 
    historyDetails()
})



// toggle

document.getElementById('card1').addEventListener('click', function () {

    document.getElementById('Add-money').style.display = 'block';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('Transfer-money').style.display = 'none';
    document.getElementById('Get-bonus').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('transaction-history').style.display = 'none'

});
document.getElementById('card2').addEventListener('click', function () {

    document.getElementById('cash-out').style.display = 'block';
    document.getElementById('Add-money').style.display = 'none';
    document.getElementById('Transfer-money').style.display = 'none';
    document.getElementById('Get-bonus').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('transaction-history').style.display = 'none'

});
document.getElementById('card3').addEventListener('click', function () {

    document.getElementById('Transfer-money').style.display = 'block';
    document.getElementById('Add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('Get-bonus').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('transaction-history').style.display = 'none'
})

document.getElementById('card4').addEventListener('click', function () {
    document.getElementById('Get-bonus').style.display = 'block'
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('Add-money').style.display = 'none';
    document.getElementById('Transfer-money').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('transaction-history').style.display = 'none'

})
document.getElementById('card5').addEventListener('click', function () {
    document.getElementById('pay-bill').style.display = 'block'

    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('Add-money').style.display = 'none';
    document.getElementById('Transfer-money').style.display = 'none';
    document.getElementById('Get-bonus').style.display = 'none'

    document.getElementById('transaction-history').style.display = 'none'

})
document.getElementById('card6').addEventListener('click', function () {
    document.getElementById('transaction-history').style.display = 'block'
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('Add-money').style.display = 'none';
    document.getElementById('Transfer-money').style.display = 'none';
    document.getElementById('Get-bonus').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'



})



// cashout js
document.getElementById('cashout-button').addEventListener('click', function () {

    const balance = availableBalance('available-balance')
    const agentNumber = agent('cashout-agent-number')
    const amount = amount('cashout-amount')
    const pin = pin('cashout-pin')

    // console.log(balance, agentNumber, amount, pinInput)

    if (agentNumber.length < 11) {
        alert('Invalid agent number. Please enter a valid agent number.');
        return;
    }


    if (balance <= 0 || balance < amount) {
        alert('Insufficient balance. Please enter a valid amount.');
        return;
    }

    let newamount = balance - amount
    document.getElementById('available-balance').innerText = newamount;

    if (pin !== pingNumber) {
        alert('Incorrect Pin ,Please Enter a valide PIN')
        return;
    }

    document.getElementById('cashout-amount').value = "";
    document.getElementById('cashout-agent-number').value = "";
    document.getElementById('cashout-pin').value = "";


    // add money data save rakar jonno variable creat korlam 
    historyDetails()


})


// transfer money 
document.getElementById('Transfer-button').addEventListener('click', function () {
    const transferAccount = agent('transfer-account-num')
    const transferAmount = amount('transfer-amount')
    const transferPin = pin('transfer-pin')
    const transferBalance = availableBalance('available-balance')

    if ( transferAccount.length < 11 ){
        alert('Please enter a valid account number')
        return
    }

    


})







// transfermoney history  setup  
document.getElementById('card6').addEventListener('click', function () {

    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerHTML = "";

    for (const data of transactionData) {
        const div = document.createElement('div')
        div.innerHTML = `  <div class=" flex w-[600px] items-center justify-between mt-[30px] p-[20px] shadow-2xl rounded-xl">
                    <div class=" flex gap-[20px]"> 

                        <div class=" w-[50px] h-[50px]  bg-slate-200 rounded-full flex items-center p-[5px] ">
                            <img class="w-[30px] " src="assets/wallet1.png" alt="">
                        </div>

                        <div>
                            <h1 class=" text-[20px] "> ${data.name}</h1>
                            <p> ${data.date}</p>
                        </div>

                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                `

        transactionContainer.appendChild(div)
    }

})







