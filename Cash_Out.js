withdrawInput

withdrawBtn.addEventListener('click', function(){
  let withdrawAmout = parseFloat(withdrawInput.value)
  if(newBalance < withdrawAmout){
    alert('Your balance is too low')
  }else{
    newBalance -= withdrawAmout
    document.getElementById('balance-total').innerText = newBalance
    let previousWithdrawAmount =  parseFloat(document.getElementById('withdraw-total').innerText);
    let currentWithdrawAmount = previousWithdrawAmount + withdrawAmout
    document.getElementById('withdraw-total').innerText = currentWithdrawAmount


    let withdrawHistory = document.getElementById('withdrawList' );
    let date = new Date();
    let count = withdrawHistory.childElementCount;
    let DateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    let P = document.createElement('p' );
    P.innerHTML= `${count+1}.-->${withdrawAmout}.00TK Time:- ${DateTime}`;
    withdrawHistory.appendChild(P);
  }

})
