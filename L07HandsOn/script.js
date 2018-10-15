function regexChecker(){
 let fname = document.getElementById('firstName').value;
 let lname = document.getElementById('lastName').value;

const Regex = /^[A-Z][a-z]+$/;

if (fname.match(Regex)) {
    alert('Yay! Your inputs were all correct!')
    
}
else {
    alert ('Oh no! Thats an invalid format!')
}
    
if (lname.match(Regex)) {
    alert('Yay! Your inputs were all correct!')
}

else {
    alert ('Oh no! Thats an invalid format!')
}

}