/* ==========================================
   MENU MOBILE
========================================== */

const botaoMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});


/* Fechar menu ao clicar em algum link */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("ativo");

    });

});


/* ==========================================
   MODAL DA GALERIA
========================================== */

const fotos = document.querySelectorAll(".foto");
const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagem-modal");
const fecharModal = document.querySelector(".fechar-modal");


fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        const imagem = foto.getAttribute("data-imagem");

        imagemModal.src = imagem;

        modal.classList.add("ativo");

    });

});


fecharModal.addEventListener("click", () => {

    modal.classList.remove("ativo");

});


modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.classList.remove("ativo");

    }

});


/* ==========================================
   ANIMAÇÃO DE ENTRADA
========================================== */

const elementos = document.querySelectorAll(
    ".card-objetivo, .atividade, .evento, .voz, .obra"
);


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("aparecer");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach(elemento => {

    observador.observe(elemento);

});


/* ==========================================
   SCROLL SUAVE PARA LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(evento) {

        evento.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* =====================================================
   ABRIR / FECHAR PAINEL DE ACESSIBILIDADE
   ===================================================== */

const botaoAcessibilidade =
    document.getElementById("botao-acessibilidade");

const painelAcessibilidade =
    document.getElementById("painel-acessibilidade");


if (botaoAcessibilidade && painelAcessibilidade) {

    botaoAcessibilidade.addEventListener("click", function () {

        const aberto =
            painelAcessibilidade.classList.toggle("aberto");


        botaoAcessibilidade.setAttribute(
            "aria-expanded",
            aberto
        );


        painelAcessibilidade.setAttribute(
            "aria-hidden",
            !aberto
        );

    });

}
/* =====================================================
   GALERIA DE PRODUÇÕES
   ===================================================== */

const botoesImagem =
    document.querySelectorAll(".abrir-imagem");

const modalImagem =
    document.getElementById("modal-imagem");

const imagemAmpliada =
    document.getElementById("imagem-ampliada");

const tituloImagem =
    document.getElementById("titulo-imagem");

const fecharModal =
    document.getElementById("fechar-modal");


if (
    botoesImagem.length > 0 &&
    modalImagem
) {

    botoesImagem.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const imagem =
                botao.getAttribute("data-imagem");

            const titulo =
                botao.getAttribute("data-titulo");


            imagemAmpliada.src = imagem;

            imagemAmpliada.alt = titulo;

            tituloImagem.textContent = titulo;


            modalImagem.classList.add("aberto");

            modalImagem.setAttribute(
                "aria-hidden",
                "false"
            );

        });

    });


    /* FECHAR */

    fecharModal.addEventListener(
        "click",
        function () {

            modalImagem.classList.remove("aberto");

            modalImagem.setAttribute(
                "aria-hidden",
                "true"
            );

        }
    );


    /* FECHAR CLICANDO FORA */

    modalImagem.addEventListener(
        "click",
        function (evento) {

            if (
                evento.target === modalImagem
            ) {

                modalImagem.classList.remove(
                    "aberto"
                );

                modalImagem.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );


    /* FECHAR COM ESC */

    document.addEventListener(
        "keydown",
        function (evento) {

            if (
                evento.key === "Escape"
            ) {

                modalImagem.classList.remove(
                    "aberto"
                );

                modalImagem.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}