function moveMembership(){
    if(localStorage.getItem("signed") !== "1"){
        window.location.href ="membership.html";
    }
    else{
        alert("Dear user,You have signed up already.")
    }
}

function moveFoods(){
    if(localStorage.getItem("signed") === "1"){
        window.location.href ="foods.html";
    }
    else{
        let sure = confirm("Dear user,You haven't signed up yet, u just want to explore first?")
        if(sure){
            window.location.href ="foods.html";
        }
    }
}