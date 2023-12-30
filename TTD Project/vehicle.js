let form = document.getElementById("form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        validate();
      });

      function validate() {
        let name = document.getElementById("Name").value.trim();
        let phone = document.getElementById("PhoneNumber").value.trim();
        let mail= document.getElementById("Email").value.trim();
        //let pwd = document.getElementById("password").value.trim();
        //let cpwd = document.getElementById("cpwd").value.trim();
        //let is_checked = document.getElementById("agree").checked;
        let is_name_valid = true;
        //let is_pwd_valid = true;
        let is_phone_valid = true;
        let is_mail_valid = true;
        if (name == "") {
          document.getElementById("error").innerText ="Name cannot be empty";
            is_name_valid = false;
            return;
        }
        if (name.match(/[0-9]/)) {
          document.getElementById("error").innerText ="Name cannot contain Digits";
          is_name_valid = false;
          return;
        }
        if (name.length < 3) {
          document.getElementById("error").innerText ="Name should be atleast 3 Characters";
          is_name_valid = false;
        return;
        }
        if (phone == "") {
          document.getElementById("error").innerText ="Phone cannot be empty";
          is_phone_valid = false;
          return;
        }
        if (phone.length != 10) {
          document.getElementById("error").innerText ="Phone number should be 10 Characters";
          is_phone_valid = false;
        return;
        }
        if (phone.match(/[a-zA-z._$@-]/)) {
          document.getElementById("error").innerText ="Phone number cannot contain Alphabets and Special characters";
          is_phone_valid = false;
          return;
         }
	 if (mail == "") {
          document.getElementById("error").innerText ="Mail cannot be empty";
          is_mail_valid = false;
          return;
         }
           if(! mail.match(/^([a-zA-Z0-9._-]+)@([a-zA-Z0-9]+)\.([a-z]{2,6})*$/))
           {
        	  document.getElementById("error").innerText ="Enter valid email id";	
        	  is_mail_valid=false;
        	  return;
        	}
        /*if (pwd == "") {
          document.getElementById("error").innerText ="Password cannot be empty";
          is_pwd_valid = false;
          return;
        }
        if (pwd.length < 8) {
          document.getElementById("error").innerText ="Password should be atleast 8 Characters";
          is_pwd_valid = false;
          return;
        }
        if (! pwd.match(/[a-z]/)) {
          document.getElementById("error").innerText ="Password must contain one Lowercase letter";
          is_pwd_valid = false;
          return;
        }
        if (!pwd.match(/[A-Z]/)) {
          document.getElementById("error").innerText ="Password must contain one Uppercase letter";
          is_pwd_valid = false;
          return;
        }
        if (!pwd.match(/[@#&-]/)) {
          document.getElementById("error").innerText ="Password must contain one Special Character";
          is_pwd_valid = false;
          return;
        }
        if (!pwd.match(/[0-9]/)) {
          document.getElementById("error").innerText ="Password must contain one digit Character";
          is_pwd_valid = false;
          return;
        }
        if (pwd != cpwd) {
          document.getElementById("error").innerText ="Password confirmation not matched";
          is_pwd_valid = false;
          return;
        }
        if (!is_checked) {
          document.getElementById("error").innerText ="Please Agree Terms and Conditions to continue";
          return;
        }*/
        if (is_name_valid &&is_phone_valid&&is_mail_valid) {
          form.submit();
        }
      }
