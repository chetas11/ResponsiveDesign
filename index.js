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
    } 
    
    if(!Address1.value){        
        flag = true;
    }
    
    if(!Address2.value){       
        flag = true;
    } 
    
    if(!City.value){       
       flag = true;
    } 
    
    if(!State.value){       
        flag = true;
    }
    
    if(!Zip.value){       
        flag = true;
    }
    
    if(!Email.value){     
        flag = true;
    }
    
    if(!Phone.value){      
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

    Address1.addEventListener("change", function(){
       Address1.classList.remove("error")
    })

    Address2.addEventListener("change", function(){
       Address2.classList.remove("error")
    })

    City.addEventListener("change", function(){
       City.classList.remove("error")
    })
    State.addEventListener("change", function(){
       State.classList.remove("error")
    })

    Zip.addEventListener("change", function(){
       Zip.classList.remove("error")
    })


    Phone.addEventListener("change", function(){
       Phone.classList.remove("error")
    })


    Email.addEventListener("change", function(){
       Email.classList.remove("error")
    })


})