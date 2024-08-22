const NameField=document.querySelector("[name=lnombre]");
const lastnameField=document.querySelector("[name=lapellido]");
const emailField=document.querySelector("[name=correo]");
const celularField=document.querySelector("[name=celular]");
const naciField=document.querySelector("[name=nacimiento]");
const comenField=document.querySelector("[name=comentario]");
const añosexpField=document.querySelector("[name=añosexp]");
const rol=document.querySelector("[name=trabajos]");
const form=document.getElementById("separador");

const validatemail= e=> {
    const field=e.target;
    const fieldValue=e.target.value;
    const regex= new RegExp (/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i);
    regex.test(field.value)
    console.log(regex.test(field.value))
    if(fieldValue.trim().length > 5 && !regex.test(fieldValue) ){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

NameField.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

emailField.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

lastnameField.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

celularField.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

naciField.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

comenField.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

añosexpField.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

rol.addEventListener("blur",function (e){
    const field=e.target;
    const fieldValue=e.target.value;
    if(fieldValue.trim().length == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})