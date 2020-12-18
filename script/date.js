var d = new Date();
var date = d.getDate();
var notification = document.getElementById("notification");
if(date === 1){
    document.getElementById("sale-type").innerHTML = "Sale Day! All Customers ";
    notification.style.display = "block";
}
if(date===15){
    document.getElementById("sale-type").innerHTML = "Sale Day! Senior Citizens ";
    notification.style.display = "block";
}