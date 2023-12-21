function changeBackgroundColor() {
     document.body.style.backgroundColor= 'white';
}
function changeBackgroundColor1() {
     document.body.style.backgroundColor= 'black';
}
 function openPopup(imageSrc) {
            var popupImage = document.getElementById("popupImage");
            popupImage.src = imageSrc;
            
            var popup = document.getElementById("popup");
            popup.style.display = "block";
        }
        
        document.getElementById("popup").addEventListener("click", function() {
            this.style.display = "none";
        });
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}    

// Functions for login popup and captcha
function openPopup() {
     document.getElementById('loginPopup').style.display = 'block';
     generateCaptcha();
   }
   
   function closePopup() {
     document.getElementById('loginPopup').style.display = 'none';
   }
   
   function generateCaptcha() {
     const captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
     document.getElementById('captchaText').innerText = captchaText;
   }
   
   function refreshCaptcha() {
     generateCaptcha();
     document.getElementById('captcha').value = ''; // Clear the entered captcha
   }
   
   function submitForm() {
     const enteredCaptcha = document.getElementById('captcha').value.toUpperCase();
     const captchaText = document.getElementById('captchaText').innerText;
   
     if (enteredCaptcha === captchaText) {
       alert('Login successful!');
       closePopup();
     } else {
       alert('Incorrect captcha. Please try again.');
       refreshCaptcha();
     }
   }
   
   // Login function to open the popup
function login() {
     openPopup();
   }
   