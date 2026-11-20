const button = document.getElementById("btn-tema");

function legal() {
    if (document.body.classList.contains("escuro")) {
        button.textContent = "Modo claro";
    } else {
        button.textContent = "Modo escuro";
    }
}

button.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
    legal();
});

legal();