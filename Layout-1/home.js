//IF STATEMENT//
var name = prompt("Enter the username","") 
if(name) {
    if (name !== "Tom") {
        console.log("I don't know you")
    }else if (name == "Tom"){
        console.log("Admin")
        var value=prompt("Enter the Password","")
        if (value){
            if (value !== "100"){
                console.log("Incorrect password")        
            }else if (value == "100"){
                console.log("Password correct");    
            }else {
                console.log("Invalid Password");    
            }    
        }
    }else {
        console.log("Invalid username"); 
    }  
}
