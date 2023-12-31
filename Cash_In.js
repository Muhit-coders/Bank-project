let depositInput = document.getElementById('deposit-input');
let withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdraw-btn')

let newBalance;
let newWithdrawAmount;

depositBtn.addEventListener('click'), function(){
  let currentDeposit = parseFloat(document.getElementById('deposit-total').innerText)
  depositAmount = parseFloat(depositInput.value)
  newBalance = currentDeposit + depositAmount; 
  document.getElementById('deposit-total').innerText = newBalance
  document.getElementById('balance-total').innerText = newBalance
}

// ...start Deposit History... //

let DepositHistory = document.getElementById('depositList' );
let date = new Date();
let count = DepositHistory.childElementCount;
let DateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
let P = document.createElement('p' );
P.innerHTML= `${count+1}.-->${depositAmount}.00TK Time:- ${DateTime}`;
DepositHistory.appendChild(P);

// ...end Deposit History... //

