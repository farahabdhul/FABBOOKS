function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        Email:document.getElementById("email").value,
        messeges:document.getElementById("messeges").value,
    };


    const serviceID="service_wx6ra3k";
    const templateID="template_1eqnjqp";  
    
    emailjs.send(serviceID,templateID,params)
    .then(
        (res)=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("messeges").value="";
            console.log(res);
            alert("your msg is sented succesfully");

        }
    )
    .catch((err) => console.log(err));

}

     $(document).ready(function(){
    $("#connect-form").validate({ 
        rules:{
            fname:{
                required:true,
                minlenght:4,
                maxlength:10,                 
            },
          email:{
            required:true,
            email:true,

          },
           Messeges:{
            minlenght:10,

            required:true,
           } 
        }
       
    }) 
})

