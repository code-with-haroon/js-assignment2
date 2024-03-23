// Input statement

document.getElementById("ClearSteatementButton").onclick= function () {
    document.getElementById("input").innerHTML = "";
}
// Output Statement

document.getElementById("ClearOutputButton").onclick= function () {
    document.getElementById("output").innerHTML= "";
}

// Concatenation
document.getElementById("ConcatennateSomeStrings").onclick = function () {
    var message="good by";
    var name="Haroon";
    var banger="!";
    let statement= (message + " " + name + banger)
    document.getElementById("input").innerHTML= '<p>"good by" + " " + "Haroon" + "!"</p>';
    document.getElementById("output").innerHTML= statement;
}
// Ask Name From user
document.getElementById("AskNameFromUser").onclick = function () {
   let firstName= prompt('Please enter your First Name'); 
   let lastName= prompt ('Please Enter Your Last Name') ;
   let fullname= firstName+ " " + lastName;
   let statement="let firstName= "+ firstName +";<br>let lastName= "+ lastName +";<br>let fullname= firstName + lastName";
   document.getElementById("input").innerHTML=statement;
   document.getElementById("output").innerHTML= "<p class='text-centerS'>"+ fullname +"</p>";
}
// Comparison Operator
document.getElementById("ComparionOperator").onclick = function () {
    let num1 = +prompt("Enter first number");
    let num2 = +prompt("Enter second number");
    if(num1 === num2){
        document.getElementById("input").innerHTML = "num1 == num2";
        
        document.getElementById( "output").innerHTML = "<span class='text-success'>Your condition is true &#128522</span>";
    }
    else{
        document.getElementById("input").innerHTML= "num1 !== num2";
        document.getElementById( "output").innerHTML = "<span class='text-danger'>Your condition is false &#128554</span>";
    }
}
// if else if
document.getElementById("ifelseif").onclick= function () {
    document.getElementById("input"),innerHTML="";
    let marks= +prompt("Enter your marks");
    if(marks >=90 ) {
        document.getElementById("output").innerHTML="<span class='text-success'> You have got A+ Grade </span>";
}else if(marks>=80 ){
     document.getElementById("output").innerHTML="<span class='text-success'> You have got A Grade </span>";
     }else if(marks >=70 ){
          document.getElementById("output").innerHTML="<span class='text-warning'> You have got B Grade </span>";
     } else if(marks >=60 ){
        document.getElementById("output").innerHTML="<span class='text-warning'> You have got C Grade </span>";
   }   else if(marks >=50 ){
    document.getElementById("output").innerHTML="<span class='text-info'> You have got D Grade </span>";
}     else {
    document.getElementById("output").innerHTML="<span class='text-danger'> You are fail!  </span>";
}
}
// sets of conditions 
document.getElementById("TestingSetsofCondition").onclick = function (){
    document.getElementById("input").innerHTML = " ";
    let age = prompt("please enter your age")
    let weight = prompt("please enter your weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("output").innerHTML = "you are a baby"
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("output").innerHTML = "you are teenager and healthy"
    }
    else if (age <= 25 && weight <= 60) {
        document.getElementById("output").innerHTML = "you are a youngman and fatty"
    }
    else if (age <= 30 && weight <= 65) {
        document.getElementById("output").innerHTML = "you are a youngman and healthy"
    }
    else {
        document.getElementById("output").innerHTML = "you are a Senior Citizen and fatty"
    }

}
// if statement nested
document.getElementById("ifStatementsNested").onclick= function () {
    let userName = prompt("Please enter user name");
    if(userName === "Haroon"){
        let  password = +prompt("Please enter the password");
        if(password == 555){
            document.getElementById("output").innerHTML="<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>";
        }
        else{
            document.getElementById("output").innerHTML ="Wrong Password!";
        } 
    }
    else{
        document.getElementById("output").innerHTML="User Name is incorrect!";
    }
}
// login 
document.getElementById("Login").onclick = function (){
    document.getElementById("input").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "Haroon" && passWord === 555 ){
        document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output").innerHTML = "Try using Haroon as username and 555 as a password"
    }

}
