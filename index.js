const Form = document.getElementById("form")
const Name = document.getElementById("fullname")
const Address1 = document.getElementById("add1")
const Address2 = document.getElementById("add2")
const City = document.getElementById("city")
const State = document.getElementById("state")
const Zip = document.getElementById("zip")
const Email = document.getElementById("email")
const Phone = document.getElementById("phone")

Form.addEventListener("submit", function(e){
    e.preventDefault();
     let flag = false

    if(!Name.value){       
        flag = true;
    }else if(!Address1.value){        
        flag = true;
    }else if(!Address2.value){       
        flag = true;
    }else if(!City.value){       
       flag = true;
    }else if(!State.value){       
        flag = true;
    }else if(!Zip.value){       
        flag = true;
    }else if(!Email.value){     
        flag = true;
    }else if(!Phone.value){      
        flag = true;
    }
    
    if(!flag){
        alert("Thank you!!!")
    }else{
        Name.classList.add("error")
        Address1.classList.add("error")
        Address2.classList.add("error")
        City.classList.add("error")
        State.classList.add("error")
        Zip.classList.add("error")
        Email.classList.add("error")
        Phone.classList.add("error")
    }

    Name.addEventListener("change", function(){
       Name.classList.remove("error")
    })

    Name.addEventListener("change", function(){
       Name.classList.remove("error")
    })

    Name.addEventListener("change", function(){
       Name.classList.remove("error")
    })

    Name.addEventListener("change", function(){
       Name.classList.remove("error")
    })
    Name.addEventListener("change", function(){
       Name.classList.remove("error")
    })

    Name.addEventListener("change", function(){
       Name.classList.remove("error")
    })


})