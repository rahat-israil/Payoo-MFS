//Add Money

//Step-1 Add event handler to add money button
document.getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    //prevent page reload after the form submit
    event.preventDefault();

    //Step-2 Get money to be added to the account
    const addMoneyInput = document.getElementById('add-money-input').value;
    
    //Get the pin number provided by the user

    const pinNumberInput = document.getElementById('input-pin-number').value;

    // Step-3 Verify the pin number
    if (pinNumberInput === '1234') {
      console.log('Adding Money to your account.');

      // Step-4 Get the current balance
      const balance = document.getElementById('account-balance').innerText;

      //Step-5 Add addMoney to the current account
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      //Step-6 Update the account balance
      document.getElementById('account-balance').innerText = newBalance;
    }
    else {
      alert('Faild to Add Money! Please try again.');
    }

  });



//Cash Out
  
//Step-1 Add event handler to cash out button

document.getElementById('btn-cash-out')
  .addEventListener('click', function (event) {
    //prevent page reload after the form submit
    event.preventDefault();

    //Step-2 Get money to be cash out to the account
    const cashOutInput = document.getElementById('cash-out-input').value;

    //Get the pin number provided by the user
    const pinNumberInput2 = document.getElementById('cash-out-pin').value;

    // Step-3 Verify the pin number
    if (pinNumberInput2 === '1234') {
      console.log('Cash out successful');

      // Step-4 Get the current balance
      const balance = document.getElementById('account-balance').innerText;

      //Step-5 Cash Out to the current account
      const cashOutNumber = parseFloat(cashOutInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - cashOutNumber;
      console.log(newBalance);

      //Step-6 Update the account balance
      document.getElementById('account-balance').innerText = newBalance;

    }
    else {
      alert('Faild to Cash Out! Please try again.');
    }

  });



// Toggle feature
  
document.getElementById('toggle-btn-cashOut').addEventListener('click', function () { 
  document.getElementById('cash-out-form').classList.remove('hidden');
  //Hide the add money form
  document.getElementById('add-money-form').classList.add('hidden');
});


document.getElementById('toggle-btn-addMoney').addEventListener('click', function () {
  document.getElementById('add-money-form').classList.remove('hidden');

  // Hide the cash out form
  document.getElementById('cash-out-form').classList.add('hidden');
});