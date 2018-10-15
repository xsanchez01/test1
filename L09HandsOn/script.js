const einsteinNameBirthday = new XMLHttpRequest();
einsteinNameBirthday.onreadystatechange = function (){
if(this.readyState == 4 && this.status == 200){

let myObj = JSON.parse(this.responseText);
document.getElementById("Name").innerHTML = myObj.name;
document.getElementById("Birthday").innerHTML = myObj.birthday;
document.getElementById("button").addEventListener("click",
function(){
    document.getElementById("Bio").innerHTML = myObj.Bio;
})
}
};

einsteinNameBirthday.open("GET", "einstein.json", true);
einsteinNameBirthday.send();