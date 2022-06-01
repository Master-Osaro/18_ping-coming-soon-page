const sendBtn = document.querySelector(".notify-section button");
const errorMsg = document.querySelector(".error-msg");

const inputEl = document.querySelector(".notify-section input");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
    errorMsg.style.display = "none";
    inputEl.style.borderColor = "hsl(223, 100%, 88%)";
}, 8000);

sendBtn.addEventListener("click", function() {
    if (inputEl.value.length === 0) {
        errorMsg.style.display = "inline-block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
        inputEl.style.borderColor = "red";
        // errorMsg.scrollIntoView();
        return timeoutFunc;
    } else if (!inputEl.value.match(emailValidation)) {
        errorMsg.style.display = "inline-block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Please provide a valid email address";
        inputEl.style.borderColor = "red";
        // errorMsg.scrollIntoView();
        return timeoutFunc;
    } else {
        errorMsg.style.display = "inline-block";
        errorMsg.style.color = "green";
        inputEl.style.borderColor = "green";
        errorMsg.textContent = "Thank you for subscribing to our newsletter!";
        return timeoutFunc;
    }
});