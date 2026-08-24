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
   ACESSIBILIDADE
   ===================================================== */


/* ---------- AUMENTAR TEXTO ---------- */

const btnAumentar = document.getElementById("btn-aumentar");

if (btnAumentar) {

    btnAumentar.addEventListener("click", function () {

        document.body.classList.add("texto-grande");

    });

}


/* ---------- DIMINUIR TEXTO ---------- */

const btnDiminuir = document.getElementById("btn-diminuir");

if (btnDiminuir) {

    btnDiminuir.addEventListener("click", function () {

        document.body.classList.remove("texto-grande");

    });

}


/* ---------- ALTO CONTRASTE ---------- */

const btnContraste = document.getElementById("btn-contraste");

if (btnContraste) {

    btnContraste.addEventListener("click", function () {

        document.body.classList.toggle("alto-contraste");

    });

}


/* ---------- LEITURA EM VOZ ALTA ---------- */

const btnLeitura = document.getElementById("btn-leitura");

if (btnLeitura) {

    btnLeitura.addEventListener("click", function () {

        /* Se já estiver lendo, interrompe */

        if (speechSynthesis.speaking) {

            speechSynthesis.cancel();

            return;

        }


        /* Seleciona o conteúdo principal */

        const conteudo = document.querySelector("main");

        if (!conteudo) return;


        /* Pega somente o texto */

        const texto = conteudo.innerText;


        /* Cria a leitura */

        const leitura = new SpeechSynthesisUtterance(texto);


        /* Português do Brasil */

        leitura.lang = "pt-BR";


        /* Velocidade */

        leitura.rate = 0.9;


        /* Inicia */

        speechSynthesis.speak(leitura);

    });

}