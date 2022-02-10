function checkUserName() {
  var flag;

  if (this.value === '') {
    alert('this fild is requried');
    return (flag = false);
  } else if (this.value.length < 8 || this.value.length > 20) {
    alert('length min 8 and max20');
    return (flag = false);
  } else {
    return (flag = true);
  }
}
window.document
  .getElementById('inpName')
  .addEventListener('blur', checkUserName);

function checkUserNumber() {
  var checknum;
  var numbReg = /^(01)[0-25][0-9]{8}$/;

  if (!numbReg.test(this.value)) {
    //    &&(e.which >= 108 || e.which <= 95)
    alert('plz enter vaild number');
    return (checknum = false);
  } else {
    return (checknum = true);
  }
}
inpNum.addEventListener('blur', checkUserNumber);

function checkemail() {
  var emailFlag;
  if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(this.value)) {
    alert('email incoorect');
    return (emailFlag = false);
  } else {
    return (emailFlag = true);
  }
}
inpEmail.addEventListener('blur', checkemail);

function CheckPAssword() {
  var flag;
  if (inpPassword.value == '') {
    alert('plz enter password');
    return (flag = false);
  } else {
    return (flag = true);
  }
}
inpPassword.addEventListener('blur', CheckPAssword);

function checkValidation() {
  if (checkUserName() && CheckPAssword() && checkUserNumber() && checkemail()) {
    document.getElementById('btnSubmit').disabled = false;
    alert('nooooooooooooo');
    console.log(checkUserName(), CheckPAssword());
  } else {
    document.getElementById('btnSubmit').disabled = true;
  }
}
