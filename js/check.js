let foods = JSON.parse(localStorage.getItem("foods"));
let price = JSON.parse(localStorage.getItem("price"));

let list = "";

for (let i =0; i< foods.length; i++){
    list += "<td>" + (i+1);
    list += "<td>" + foods[i];
    list += "<td>" + `<button onclick = del(${i})>`+ "delete" + "</button>";
    list += "<tr>";
}

document.getElementById("dataList").innerHTML += list;
document.getElementById("price").innerHTML += price;



function del(i){
    if(confirm("Are u sure?")){
        foods.splice(i,1);
        localStorage.setItem("foods",JSON.stringify((foods)));
        window.location.href ="check.html";
    };


};

function pay(){
    if(confirm("Are u sure u are ready to pay?")){
        window.location.href ="paid.html";
    }
}

function back(){
    window.location.href ="foods.html";
}