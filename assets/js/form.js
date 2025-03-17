function sentMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.sent("service_nevy0jp","template_8d24ug5",parms).then(alert("mailsent!!"))
}