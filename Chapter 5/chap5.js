var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter first item");
    item2 = prompt("Enter second item");
    item3 = prompt("Enter third item");
    item4 = prompt("Enter forth item");
    item5 = prompt("Enter fifth item");
    item6 = prompt("Enter sixth item");
    updateList();
}

function updateList() {
    document.getElementById("1").innerHTML = item1;
    document.getElementById("2").innerHTML = item2;
    document.getElementById("3").innerHTML = item3;
    document.getElementById("4").innerHTML = item4;
    document.getElementById("5").innerHTML = item5;
    document.getElementById("6").innerHTML = item6;
}