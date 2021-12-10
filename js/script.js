function myFunction() {
   let bDate = document.getElementById("birthday").value;
    let dateOb =  bDate;
    dateObArray = bDate.split('-');
    //  dateObArray[0] = "year";
    //  dateObArray[1] = "month";
    //  dateObArray[2] = "date"
    if (dateObArray.length !== 3) {
        alert("invalid date");
    }else{
       if (! dateObArray[0].match) {
           alert("invalid")
       }
    }
   document.getElementById("results").value = dateOb;
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
var getSelectedValue = document.querySelector('input[name="gender"]:checked');
if (getSelectedValue !=null) {
   return false;
}
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
