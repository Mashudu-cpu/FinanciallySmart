const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if(registerForm){
    registerForm.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user={name, email, password};

        localStorage.setItem("user", JSON.stringify(user));

        alert("Account Created");

        window.location.href="login.html";
    });
}

if(loginForm){
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if(user && user.email === email && user.password === password){
            localStorage.setItem("loggedIn", true);

            window.location.href="dashboard.html";
        }
        else{
            alert("Incorrect credentials");
        }
    });
}