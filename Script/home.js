document.getElementById('btn-add-money').addEventListener('click', function(){
  
  const validPin = 1212 
    
  const bankName = document.getElementById('bank-name').value
  const accountNumber = document.getElementById('bank-acc').value
  const amountAdded = document.getElementById('added-amount').value
  const addedAmountNumber = parseInt(amountAdded)
  const pin = document.getElementById('pin-num').value
  const pinNumber = parseInt(pin)

  const availableBalance = document.getElementById('available-balance').innerText
  const availableBalanceNumber = parseInt(availableBalance);

  if(pinNumber !== validPin){
    alert('Your Pin in Invalid. Please enter the valid one to transaction')
    return;
  }else if(accountNumber.length !== 11){
    alert('Your account number should consist of 11 digit')
    return;
  }
  
  const newBalance = availableBalanceNumber + addedAmountNumber

  document.getElementById('available-balance').innerText = newBalance

})

document.getElementById('btn-withdraw-money').addEventListener('click', function(){
    const agentNumberString = document.getElementById('agent-no').value
    const agentNumber = parseInt(agentNumberString)
    const amountString = document.getElementById('cash-amount').value
    const amount = parseInt(amountString)
    const pinNumberString = document.getElementById('withdraw-pin').value
    const pinNumber = parseInt(pinNumberString)

    const availableBalanceString = document.getElementById('available-balance').innerText
    const availableBalance = parseInt(availableBalanceString)

    const deductedBalance = availableBalance - amount

    document.getElementById('available-balance').innerText = deductedBalance






})








document.getElementById('add-money-card').addEventListener('click', function(){

    document.getElementById('add-money').style.display = 'block'
    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'none'
})
document.getElementById('cashout-card').addEventListener('click', function(){
    

    document.getElementById('cash-out').style.display = 'block'
    document.getElementById('add-money').style.display = 'none'
     document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'none'
})

document.getElementById('transfer-money-card').addEventListener('click', function(){
    

    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('add-money').style.display = 'none'
     document.getElementById('transfer-money').style.display = 'block'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'none'
})
document.getElementById('pay-bill-card').addEventListener('click', function(){
    

    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('add-money').style.display = 'none'
     document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'block'
    document.getElementById('get-bonus').style.display = 'none'
})
document.getElementById('get-bonus-card').addEventListener('click', function(){
    

    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('add-money').style.display = 'none'
     document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'block'
})