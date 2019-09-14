function is_username_valid(username) {
  var lowercaseRe = /[a-z]/g;
  var numberRe = /[0-9]/g;
  
	if(username.length == 5-9 && username.match(lowercaseRe).length == username.length) {
    	return true;
    }
    console.log(is_username_valid('siska') ? 'benar' : 'salah');
    {
    return false;
}
console.log(is_username_valid('cod3r') ? 'benar' : 'salah'); 

function is_password_valid(password) {
	var lowercaseRe = /[a-z]/g;
  var uppercaseRe = /[A-Z]/g;
  var numberRe = /[1]/g;
  var specialRe = /[_@#$%]/g;
  var numberRe = /[1]/g;

  if(password.length == 8
     && lowercaseRe.test(password)
     && uppercaseRe.test(password)
     && numberRe.test(password)
     && specialRe.test(password)) {
     return true;
  }
  console.log(is_password_valid('codeYourFuture!123') ? 'benar' : 'salah');
  {

  return false;
}
console.log(is_password_valid('p4s$gW') ? 'benar' : 'salah');
