const NameField=document.querySelector("[name=nombre]");
const emailField=document.querySelector("[name=correo]");
const comentField=document.querySelector("[name=comentario]");

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

comentField.addEventListener("blur",function (e){
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
