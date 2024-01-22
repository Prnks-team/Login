const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "password") {
        alert("You have successfully logged in.");
        <meta http-equiv="Refresh" content="0; url='https://prnkinfoboard.matomo.cloud/index.php?module=CoreHome&action=index&idSite=1&period=day&date=yesterday#?period=day&date=yesterday&idSite=1&category=Dashboard_Dashboard&subcategory=1'" />
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
