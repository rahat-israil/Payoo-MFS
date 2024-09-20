
document.getElementById('login-button')
  .addEventListener('click', function (event) {
    event.preventDefault(); // Very important
    console.log('Login button clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    if (phoneNumber === '01828353322' && pinNumber === '1234') {
      console.log('You are Logged in successfully');
      window.location.href = '/home.html';
    }
    else {
      alert('Wrong Phone Number or PIN Number')
    }
  });
    

