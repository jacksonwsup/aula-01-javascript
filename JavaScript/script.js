function login() {
    console.log("login!!!");

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    console.log(email)
    console.log(password)

    const body = {
        email,
        password
    };

    console.log(body);

        fetch("http://localhost:8080/oauth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
        .then(res => {
            console.log(res);
        });

}

window.onload = function () {

    console.log("terminou de carregar a pagina");

    document.querySelector("#email").focus();
}