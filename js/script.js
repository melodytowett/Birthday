 var birthDay = function() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var date = document.getElementById("date").value;
     var gender = document.querySelector('input[name = "gender"]:checked').value;
     if (!year.match(/^\d\d\d\d$/)) {
        alert("provide year");
       // document.myForm.YYY.focus();
        return false;
    } else if (month == "" || month <=0 || month >12 ) {
        alert("enter valid month");
    }else if (date = "" || date <=0 || date >31) {
        alert("enter valid date");
    }else{
        var realDay = function(year,month,date){
            var year = document.getElementById("year").value;
            var month = document.getElementById("month").value;
            var date = document.getElementById("date").value;

            var yy = parseInt(year);
            var mm = parseInt(month);
            var dd = parseInt(date);
            var cc = parseInt(year.slice(0,2));
            var day =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7
            var weekDay=Math.ceil(day) ;
        // //    var weekDay =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        //     if (weekDay = 0) {
        //        document.write("<b>sunday</b>");
        //     }else if (weekDay = 1) {
        //        document.write("<b>Monday</b>");
        //     }else if (weekDay = 2) {
        //         document.write("<b>Tuesday</b>");
        //     }else if (weekDay = 3) {
        //         document.write("<b>Wednesday</b>");
        //     }else if (weekDay = 4) {
        //         document.write("<b>Thursday</b>");
        //     }else if (weekDay = 5) {
        //         document.write("<b>Friday</b>");
        //     }else{
        //         document.write("<b>Saturday</b>")
        //     }
           alert (weekDay);
        var gender = document.querySelector('input[name = "gender"]:checked').value;
        if (gender==="female") {
            //var weekDay =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var name //=["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];
            // if (weekDay === "Sunday") {
            //     alert("Akosua");
            // }else if (weekDay==="Monday") {
            //     alert("Adwoa");
            // }else if (weekDay === "Tuesday") {
            //     alert("Abena");
            // }else if(weekDay === "Wednesday"){
            //     alert("Akua");
            // }else if (weekDay === "Thursday") {
            //     alert("Yaa");
            // }else if (weekDay === "Friday") {
            //     alert("Afua");
            // }else{
            //     alert("Ama");
            // }
        
            switch (weekDay) {
                 case 0:
                    name = "Akosua";
                    break;
                case 1:
                    name = "Adwoa";
                    break;
                case 2:
                    name = "Abenaa";
                    break;
                case 3:
                    name = "Akua";
                    break;
                case 4:
                    name = "Yaa";
                    break;
                case 5:
                    name = "Afua";
                    break;
                case 6:
                    name = "Ama";
                            break;
                        
                    } 
                    //alert (name);
                    document.getElementById("output").innerHTML = "Your Akhan name is" +" " +name;
                
                }else{
                switch (weekDay) {
                    case 0:
                        name = "Kwasi";
                        break;
                    case 1:
                        name = "Kwadwo";
                        break;
                    case 2:
                        name = "Kwabena";
                        break;
                    case 3:
                        name = "Kwaku";
                        break;
                    case 4:
                        name = "Yaw";
                        break;
                    case 5:
                        name = "Kofi";
                        break;
                    case 6:
                        name = "Kwame"; 
                        break;
                        } 
                } //alert (name);
        document.getElementById("output").innerHTML = "Your Akhan name is" +" " +name;
        
          }
       
    }
    realDay();

 }
 
 
































