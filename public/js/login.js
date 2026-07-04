const form = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    // Block 2 : Read

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    // Block 3 : Send

    const response = await fetch("/login", {

        method: "POST",

        headers: {

            "Content-Type":"application/json"

        },

        body: JSON.stringify({

            username,

            password

        })

    });

    // Block 4 : Wait

    const result = await response.json();

    // Block 5 : Display

    if(result.success){

        localStorage.setItem("loggedIn",true);

        window.location.href="index.html";

    }

    else{

        document.getElementById("message").innerText=result.message;

    }

});