/* MODO ESCUROXXXXXXXXXXXXXXXX */
const button = document.getElementById("btn-tema");

if (button) {
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
}

/* PRÉVIA DO SITEXXXXXXXXXXXXXXXXXXXX */
const preview = document.getElementById("preview");

if (preview) {
    const frame = preview.querySelector("iframe");

    function fechar() {
        preview.classList.remove("aberto");
        frame.src = "about:blank";
    }

    document.querySelectorAll('a[target="content"]').forEach(function (link) {
        link.addEventListener("click", function () {
            preview.classList.add("aberto");
        });
    });

    document.getElementById("fechar").addEventListener("click", fechar);

    preview.addEventListener("click", function (e) {
        if (e.target === preview) fechar();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") fechar();
    });
}