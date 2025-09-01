document.getElementById('btn-login')
.addEventListener('click', function(){
    
const mobileNumber = 12345678910;
const pinNumber = 1738;

const getMobileNumber = document.getElementById('mobile-number').value;
const mobileNumberInput = parseInt(getMobileNumber);

const getPinNumber = document.getElementById('pin-number').value;
const pinNumberInput = parseInt(getPinNumber);

if(mobileNumberInput === mobileNumber && pinNumberInput===pinNumber){
    window.location.href = "http://127.0.0.1:5500/home.html"
}else{
    alert('your pin or mobile number is incorrect');
}




})