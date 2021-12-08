 function myFunction() {
   let y = document.getElementById("birthday").value;
// //      let x = document.getElementById("gender").value;

// // if (document.getElementById("male").checked == true) {
// //     document.getElementById("demo").innerHTML ;
// // }else{
// //     document.getElementById("female");
// let x = document.getElementsByName("gender").value;
// // for(i = 0; i< x.length; i++){
// //     if (x[i].checked) {
//         document.getElementById("demo").innerHTML= x;
        
// //     }
// // }







let gender = document.forms[0];
let text = "";
let i;
for(i = 0; i<gender.length; i++){
    if (gender[i].checked) {
        text = text + gender [i].value + "";
    }
}
document.getElementById("demo").value= "your gender"+" " +text;
document.getElementById("results").value = y;
}