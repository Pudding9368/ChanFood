const img = [ {name: "Super Dumpling!!" , price: 30000 ,url: "./img/dumpling.jpg"}, { name: "Icecream Mooncake!!" , price: 3 ,url: "./img/cake.jpg"} , { name: "xiking Dumpling!!" , price: 1 ,url: "./img/duck.jpg"}, { name: "KFC Burger!!" , price: 25 ,url :"./img/burger.jpg"} , { name: "Indian butter chicken!!" , price: 300 ,url :"./img/masala.jpg"} ];

let slider = document.getElementById('slideNum');

let defaultImage = img[0];
console.log(defaultImage);

document.body.style.backgroundImage = `url(${defaultImage.url})`;
document.getElementById("name").innerHTML = defaultImage.name;
document.getElementById("price").innerHTML = "$ " + defaultImage.price + " /each";


slider.oninput = function() {
    // Change the background image when the slider value changes
    document.getElementById("name").innerHTML = img[slider.value].name;
    document.getElementById("price").innerHTML = "$ " + img[slider.value].price + " /each";
    document.body.style.backgroundImage = `url(${img[slider.value].url})`;
}


function add(){
    if(localStorage.getItem("foods")){
        let food = img[slider.value].name;
        
        let foods = JSON.parse(localStorage.getItem("foods"));
        let price = JSON.parse(localStorage.getItem("price"));

        if(foods.length <=10){
        foods.push(food);
        price += img[slider.value].price;

        localStorage.setItem("foods", JSON.stringify(foods));
        localStorage.setItem("price", JSON.stringify(price));

        alert(img[slider.value].name+ " added to your cart! The order's price is currently $" + JSON.parse(localStorage.getItem("price")));

        }
        else{
            alert("Too many foods, u can click on the finish button to go delete undesired foods.")
        }


    }
    else {
        let foods = [img[slider.value].name];
        let price = img[slider.value].price;

        localStorage.setItem("foods", JSON.stringify(foods));
        localStorage.setItem("price", JSON.stringify(price));

        alert(img[slider.value].name+ " added to your cart! The order's price is currently $" + JSON.parse(localStorage.getItem("price")));
    }

    

    
}

function back(){
    window.location.href ="main.html";
}

function finish(){
    if(confirm("Are you sure u want to proceed and pay?")){

        if(localStorage.getItem("signed") !== "1"){
            alert("Sorry but since u have not signed, u would be directed to sign up first, dont worry, your cart would be maintained!");
            localStorage.setItem("jumped",1);
            window.location.href ="membership.html";
        }
        else{
            window.location.href ="check.html";
        }
    }


}