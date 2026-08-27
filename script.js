/* =====================================================
   LITERATURA E SOCIEDADE — JAVASCRIPT
   ===================================================== */


/* =====================================================
   MENU MOBILE
   ===================================================== */

const botaoMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", () => {

        menu.classList.toggle("ativo");

    });


    /* Fechar menu ao clicar em algum link */

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("ativo");

        });

    });

}


/* =====================================================
   SCROLL SUAVE
   ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (evento) {

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

const botaoAcessibilidade =
    document.getElementById("botao-acessibilidade");

const painelAcessibilidade =
    document.getElementById("painel-acessibilidade");


/* ABRIR E FECHAR PAINEL */

if (
    botaoAcessibilidade &&
    painelAcessibilidade
) {

    botaoAcessibilidade.addEventListener(
        "click",
        () => {

            const aberto =
                painelAcessibilidade.classList.toggle(
                    "aberto"
                );


            botaoAcessibilidade.setAttribute(
                "aria-expanded",
                aberto
            );


            painelAcessibilidade.setAttribute(
                "aria-hidden",
                !aberto
            );

        }
    );

}


/* =====================================================
   AUMENTAR TEXTO
   ===================================================== */

const btnAumentar =
    document.getElementById("btn-aumentar");


if (btnAumentar) {

    btnAumentar.addEventListener(
        "click",
        () => {

            document.documentElement.style.fontSize =
                "18px";

        }
    );

}


/* =====================================================
   DIMINUIR TEXTO
   ===================================================== */

const btnDiminuir =
    document.getElementById("btn-diminuir");


if (btnDiminuir) {

    btnDiminuir.addEventListener(
        "click",
        () => {

            document.documentElement.style.fontSize =
                "14px";

        }
    );

}


/* =====================================================
   ALTO CONTRASTE
   ===================================================== */

const btnContraste =
    document.getElementById("btn-contraste");


if (btnContraste) {

    btnContraste.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "alto-contraste"
            );

        }
    );

}


/* =====================================================
   LEITURA EM VOZ ALTA
   ===================================================== */

const btnLeitura =
    document.getElementById("btn-leitura");


if (btnLeitura) {

    btnLeitura.addEventListener(
        "click",
        () => {

            /* Se já estiver lendo, para */

            if (
                window.speechSynthesis.speaking
            ) {

                window.speechSynthesis.cancel();

                return;

            }


            /* Conteúdo principal */

            const conteudo =
                document.querySelector("main");


            if (!conteudo) {

                return;

            }


            /* Cria a leitura */

            const leitura =
                new SpeechSynthesisUtterance(
                    conteudo.innerText
                );


            leitura.lang = "pt-BR";

            leitura.rate = 0.9;

            leitura.pitch = 1;


            window.speechSynthesis.speak(
                leitura
            );

        }
    );

}


/* =====================================================
   GALERIA DE IMAGENS
   ===================================================== */

const fotos =
    document.querySelectorAll(".foto");


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



/* =====================================================
   FUNÇÃO PARA ABRIR O MODAL
   ===================================================== */

function abrirModal(imagem, titulo = "") {


    if (!modalImagem || !imagemAmpliada) {

        return;

    }


    imagemAmpliada.src = imagem;


    imagemAmpliada.alt =
        titulo || "Imagem ampliada";


    if (tituloImagem) {

        tituloImagem.textContent = titulo;

    }


    modalImagem.classList.add("aberto");


    modalImagem.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =====================================================
   FUNÇÃO PARA FECHAR O MODAL
   ===================================================== */

function fecharJanelaImagem() {


    if (!modalImagem) {

        return;

    }


    modalImagem.classList.remove(
        "aberto"
    );


    modalImagem.setAttribute(
        "aria-hidden",
        "true"
    );


    if (imagemAmpliada) {

        imagemAmpliada.src = "";

    }

}


/* =====================================================
   GALERIA EXISTENTE
   ===================================================== */

fotos.forEach(foto => {

    foto.addEventListener("click", () => {


        const imagem =
            foto.getAttribute("data-imagem");


        if (imagem) {

            abrirModal(
                imagem,
                "Registro da atividade"
            );

        }

    });

});


/* =====================================================
   PRODUÇÕES DOS ESTUDANTES
   ===================================================== */

botoesImagem.forEach(botao => {

    botao.addEventListener("click", () => {


        const imagem =
            botao.getAttribute("data-imagem");


        const titulo =
            botao.getAttribute("data-titulo") ||
            "Produção dos estudantes";


        if (imagem) {

            abrirModal(
                imagem,
                titulo
            );

        }

    });

});


/* =====================================================
   BOTÃO FECHAR
   ===================================================== */

if (fecharModal) {

    fecharModal.addEventListener(
        "click",
        fecharJanelaImagem
    );

}


/* =====================================================
   FECHAR CLICANDO FORA DA IMAGEM
   ===================================================== */

if (modalImagem) {

    modalImagem.addEventListener(
        "click",
        evento => {

            if (
                evento.target === modalImagem
            ) {

                fecharJanelaImagem();

            }

        }
    );

}


/* =====================================================
   FECHAR COM ESC
   ===================================================== */

document.addEventListener(
    "keydown",
    evento => {

        if (evento.key === "Escape") {

            fecharJanelaImagem();

        }

    }
);


/* =====================================================
   ANIMAÇÃO DE ENTRADA
   ===================================================== */

const elementos =
    document.querySelectorAll(
        ".card-objetivo, .atividade, .evento, .voz, .obra"
    );


if (
    "IntersectionObserver" in window
) {

    const observador =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach(
                    entrada => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "aparecer"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    elementos.forEach(
        elemento => {

            observador.observe(
                elemento
            );

        }
    );

}
/* =====================================================
   BOTÃO — LER MAIS DAS ATIVIDADES
   ===================================================== */

const botoesAtividade =
    document.querySelectorAll(".abrir-atividade");

const modalAtividade =
    document.getElementById("modal-atividade");

const tituloAtividade =
    document.getElementById("titulo-atividade");

const textoAtividade =
    document.getElementById("texto-atividade");

const fecharAtividade =
    document.getElementById("fechar-atividade");


/* ABRIR */

botoesAtividade.forEach(botao => {

    botao.addEventListener("click", () => {

        const titulo =
            botao.getAttribute("data-titulo");

        const texto =
            botao.getAttribute("data-texto");


        tituloAtividade.textContent =
            titulo;

        textoAtividade.textContent =
            texto;


        modalAtividade.classList.add(
            "aberto"
        );


        modalAtividade.setAttribute(
            "aria-hidden",
            "false"
        );

    });

});


/* FECHAR NO X */

if (fecharAtividade) {

    fecharAtividade.addEventListener(
        "click",
        () => {

            modalAtividade.classList.remove(
                "aberto"
            );

            modalAtividade.setAttribute(
                "aria-hidden",
                "true"
            );

        }
    );

}


/* FECHAR CLICANDO FORA */

if (modalAtividade) {

    modalAtividade.addEventListener(
        "click",
        evento => {

            if (
                evento.target === modalAtividade
            ) {

                modalAtividade.classList.remove(
                    "aberto"
                );

                modalAtividade.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}


/* FECHAR COM ESC */

document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape" &&
            modalAtividade
        ) {

            modalAtividade.classList.remove(
                "aberto"
            );

            modalAtividade.setAttribute(
                "aria-hidden",
                "true"
            );

        }

    }
);