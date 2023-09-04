let wrapper = document.querySelector(".wrapper"),
    registerLink = document.querySelector(".register-link"),
    loginLink = document.querySelector(".login-link"),
    loginBtnPopup = document.querySelector(".login-btn"),
    iconClose = document.querySelector(".icon-close")


registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active")
})
loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active")
})
loginBtnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup")
})
iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup")
})
document.body.addEventListener('click', (e) => {
    if(e.target.contains(wrapper)) {
        wrapper.classList.contains("active") ? wrapper.classList.remove("active") : false
        wrapper.classList.contains("active-popup") ? wrapper.classList.remove("active-popup") : false
    }
})
