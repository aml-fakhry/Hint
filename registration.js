function checkUserName() {
  var flag;
  if (inpName.value.length < 8 || inpName.value.length >= 80) {
    alert('length min 8 and max20');
    flag = false;
  } else {
    flag = true;
  }
  console.log(flag);
  return flag;
}

inpName.addEventListener('change', checkUserName);

function checkUserNumber() {
  var checkNum;
  var numbReg = /^(01)[0-25][0-9]{8}$/;
  if (!numbReg.test(inpNum.value)) {
    //    &&(e.which >= 108 || e.which <= 95)
    alert('plz enter valid number');
    checkNum = false;
  } else {
    checkNum = true;
  }
  console.log(checkNum);
  return checkNum;
}
inpNum.addEventListener('change', checkUserNumber);

function checkEmail() {
  var emailFlag;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inpEmail.value)) {
    alert('email incorrect');
    emailFlag = false;
  } else {
    emailFlag = true;
  }
  console.log(emailFlag);
  return emailFlag;
}
inpEmail.addEventListener('change', checkEmail);

function checkPassword() {
  var flag;
  if (inpPassword.value == '') {
    alert('plz enter password');
    flag = false;
  } else {
    flag = true;
  }
  console.log(flag);
  return flag;
}
inpPassword.addEventListener('change', checkPassword);

function enableSubmit() {
  let inputs = document.getElementsByClassName('req');
  let btn = document.querySelector('input[type="submit"]');
  const inpName = document.getElementById('inpName');
  const inpNum = document.getElementById('inpNum');
  const inpEmail = document.getElementById('inpEmail');
  let isValid = true;
  var numbReg = /^(01)[0-25][0-9]{8}$/;

  for (var i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];

    if (
      changedInput.value.trim() === '' ||
      changedInput.value === null ||
      inpName.value.length < 8 ||
      inpName.value.length >= 80 ||
      !numbReg.test(inpNum.value) ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inpEmail.value)
    ) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
}
