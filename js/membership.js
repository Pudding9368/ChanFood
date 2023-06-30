let temp = localStorage.getItem("signed");
if(temp === "1" ){
    hello();
}


function save(){
    let name = document.getElementById("name").value;

    while(name === ""){
        name = prompt("please enter Your name");
    }

    console.log(name);

    let email = document.getElementById("email").value;
    console.log(email);

    while(email === ""){
        email = prompt("please enter Your email");
    }

    let password = document.getElementById("password").value;
    console.log(password);

    while(password === ""){
        password = prompt("please enter Your password");
    }   

    let user = {name,email,password};
    console.log(user);

    localStorage.setItem("user", JSON.stringify(user));

    //making sure user has signed up
    localStorage.setItem("signed", 1);

    window.location.href ="membershipFinished.html";
}

function hello(){
    
    let user= JSON.parse(localStorage.getItem("user"));
    console.log(user);

    let hello = document.getElementById("hello");
    hello.innerHTML += user.name + " ^-^";
    
}

function back(){
    if(localStorage.getItem("jumped") === "1"){
        alert("Thank u for your patience, u will now be directed back to finsihed your payment.")
        window.location.href ="check.html";
    }
    else{
        window.location.href ="main.html";
    }    
}
