let form = document.getElementsByClassName("newsletter__form")[0]
const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
let error = document.getElementsByClassName("newsletter__error")[0];
let input = document.getElementsByClassName("newsletter__input")[0];

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    if(emailRegex.test(formData.get("email"))){
        form.submit()
    }
    else{
        error.style.display = "block"
        input.style.borderColor = "hsl(0, 100%, 63%)"
    }
} 
)