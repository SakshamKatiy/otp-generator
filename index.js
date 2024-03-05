const genrator = require('otp-generator');
getOtp = ()=>{
    return otp = genrator.generate(6)
}
console.log(getOtp());