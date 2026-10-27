function loginFunction(){
    event.preventDefault();
    let userEmail= document.getElementById("userEmail").value;
    let userPassword= document.getElementById("userPass").value;
    let error = document.getElementById("error");

    if(userEmail ==="admin@gmail.com" && userPassword === "1234"){

        localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("user",userEmail);
        localStorage.setItem("email",userEmail);

        // Redirected
        window.location.href="index.html"
    }else{
        error.innerHTML ="Invalid email or Password";
    }
    

}

function togglePassword(){
    alert(1);
    let passwordInput = document.getElementById("userPass");
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{

        passwordInput.type = "password";
    }
}