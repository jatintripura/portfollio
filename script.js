window.onload = function () {
  const preloaderArea = document.getElementById("preloader-area");
  preloaderArea.className = "page-loaded";
  setTimeout(function () {
    preloaderArea.style.display = "none";
  }, 1000);
};

const submitButton = document.getElementById("submit-button");


submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email-adress");
  const messageInput = document.getElementById("message");
  const erorText = document.getElementById("error-text");
  const submited= document.getElementById("submited")

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;


  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    console.log(nameValue, emailValue, messageValue);

    erorText.innerHTML = ""; 
    nameInput.value = ""; 
    emailInput.value = "";
    messageInput.value="";
    submited.innerHTML='<p> Thank you!  You have submitted the form. </p>';
    console.log(submited)

    emailjs.send(
      '088991',
      '188990',
      templateParams,
      'bElYdbXhucqHpP-0S'
    
    );
  } else {
    submited.innerHTML=""
    erorText.innerHTML ='<p class="text-danger">Please! Fill the form and submit. </p>';
  }

  console.log(nameValue, emailValue, messageValue);
});
