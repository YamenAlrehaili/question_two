function SubmitData(event){
    event.preventDefault();
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("lastName").value;
    var MSG = document.getElementById("MSG");
    MSG.innerText= "Congratulations!"+ FirstName +" "+LastName +" you are signed up";
    var Result = document.getElementById("Result");
}