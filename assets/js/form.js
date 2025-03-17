function sentMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.sent("service_nevy0jp","template_co81sbm",parms).then(alert("mailsent!!"))
}