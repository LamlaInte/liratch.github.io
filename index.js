




let monday_homwork = JSON.parse(localStorage.getItem("LINATCH_monday")) || [];

let teusday_homwork = JSON.parse(localStorage.getItem("LINATCH_teusday")) || [];

let wensday_homwork = JSON.parse(localStorage.getItem("LINATCH_wenday")) || [];

let _homwork = JSON.parse(localStorage.getItem("LINATCH_")) || [];

let friday_homwork = JSON.parse(localStorage.getItem("LINATCH_friday")) || [];





let dictionary = JSON.parse(localStorage.getItem("LINATCH")) || {};


function add() {
    dictionary[dayAdd.value] = homworkAdd.value;

    let moin = homworkAdd.value;

    if (dayAdd.value === "Monday") {


        monday_homwork.push(moin);

    }else if (dayAdd.value === "Tuesday") {


        teusday_homwork.push(moin);

    } else if (dayAdd.value === "Wednesday") {
        wensday_homwork.push(moin);

    } else if (dayAdd.value === "Thursday") {
        _homwork.push(moin);

    } else if (dayAdd.value === "Friday") {
        friday_homwork.push(moin);
        
    }else {
        console.log("Whata HACK!!!");
    }




    localStorage.setItem("LINATCH_monday", JSON.stringify(monday_homwork));


    localStorage.setItem("LINATCH_teusday", JSON.stringify(teusday_homwork));

    localStorage.setItem("LINATCH_wensday", JSON.stringify(wensday_homwork));

    localStorage.setItem("LINATCH_", JSON.stringify(_homwork));

    localStorage.setItem("LINATCH_friday", JSON.stringify(friday_homwork));


    localStorage.setItem("LINATCH", JSON.stringify(dictionary));

    homworkAdd.value = "";
    dayAdd.value = "";
}

function check() {
    if (dayCheck.value === "Monday"){
        let a = document.getElementById("dayCheckAnser").innerHTML = monday_homwork + ",    ";
        console.log("HELLLLo");
    } else if(dayCheck.value === "Tuesday"){
        let b = document.getElementById("dayCheckAnser").innerHTML = teusday_homwork + ",    ";
        console.log("HELLLLo");

    } else if(dayCheck.value === "Wednesday"){
        let c = document.getElementById("dayCheckAnser").innerHTML = wensday_homwork + ",    ";
        console.log("hello");

    } else if(dayCheck.value === "Thursday"){
        let d = document.getElementById("dayCheckAnser").innerHTML = _homwork + ",    ";
        console.log("HELLLLo");
    } else if(dayCheck.value === "Friday"){
        let e = document.getElementById("dayCheckAnser").innerHTML = friday_homwork + ",    ";
        console.log("HELLLLo");
    } else{
        console.log("Whata Hack        ");
    }



    }