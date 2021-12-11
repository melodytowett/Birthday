 function validateForm() {
       
    document.getElementById("demo").innerHTML=value;     
 }
 
 function myFunction() {
    let year = document.getElementById("year").value;
    let myYear = year;
    if (myYear == "") {
        alert("provide year");
       // document.myForm.YYY.focus();
        return false;
    } 
    let month = document.getElementById("month").value;
    let myMonth = month;
    if (myMonth == "" || myMonth <=0 || myMonth >12 ){
        alert("Enter valid a month");
        return false;
    } 
    let date = document.getElementById("date").value;
    let myDate = date;
    if (myDate = "" || myDate <=0 || myDate >31) {
        alert("Enter a valid date");
        return false;
    }

//    let bDate = document.getElementById("birthday").value;
//     let dateOb =  bDate;
//     dateObArray = bDate.split('-');
//     //  dateObArray[0] = "year";
//     //  dateObArray[1] = "month";
//     //  dateObArray[2] = "date"
//     if (dateObArray.length !== 3) {
//         alert("invalid date");
//     }else{
//     // if (! dateObArray[0].match(yyyy)) {
//            alert("valid");
//        //}
//     }
//     // if (dateArray[1] <= 0 || dateArray[1] >31) {
//     //     alert("invalid month");
//     //     return false;
//     // }
//     // if (dateArray[2] <= 0 || dateArray[2 >31]) {
//     //     alert("invalid date");
//     //     return false;
//     // }
//    document.getElementById("results").value = dateOb;
  // }
let gender = document.forms[0];
let text = "";
let i;
for(i = 0; i<gender.length; i++){
    if (gender[i].checked) {
        text = text + gender [i].value + "";
    }
}
document.getElementById("demo").value= text;
// var getSelectedValue = document.querySelector('input[name="gender"]:checked');
// if (getSelectedValue !=null) {
//    return false;
// }
}

































// if (document.getElementById("male").checked) {
//     var selectedValue = document.getElementById("demo").value;
// }else{
//     var selectedValue = document.getElementById("demo").value;
// }
//     console.log("your name is kwasi");
// }else{
//     console.log("your name is Akosu");
// }
// let dayToday = new date (y);
// document.write("getDay() :" +dayToday.getDay() );

// document.getElementById("demo").value = dayToday;
