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
   LER MAIS — ATIVIDADES
   ===================================================== */

const botoesLerMais = document.querySelectorAll(
    ".abrir-atividade"
);

const modalAtividade = document.getElementById(
    "modal-atividade"
);

const tituloAtividade = document.getElementById(
    "titulo-atividade"
);

const textoAtividade = document.getElementById(
    "texto-atividade"
);

const fecharAtividade = document.getElementById(
    "fechar-atividade"
);


/* ABRIR MODAL */

botoesLerMais.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const titulo = botao.dataset.titulo;
        const texto = botao.dataset.texto;

        tituloAtividade.textContent = titulo;
        textoAtividade.textContent = texto;

        modalAtividade.classList.add("aberto");

    });

});


/* FECHAR */

if (fecharAtividade) {

    fecharAtividade.addEventListener("click", function() {

        modalAtividade.classList.remove("aberto");

    });

}


/* FECHAR CLICANDO FORA */

if (modalAtividade) {

    modalAtividade.addEventListener("click", function(evento) {

        if (evento.target === modalAtividade) {

            modalAtividade.classList.remove("aberto");

        }

    });

}


/* FECHAR COM ESC */

document.addEventListener("keydown", function(evento) {

    if (
        evento.key === "Escape" &&
        modalAtividade
    ) {

        modalAtividade.classList.remove("aberto");

    }

});

```javascript
/* ==========================================
   PRODUÇÕES DOS ESTUDANTES
========================================== */

const producoes = [

    {
        titulo: "Poema — Saudade",

        texto: `
            Vô, ainda não acredito que você se foi,
            parece que tudo mudou depois.
            Sinto falta de te ver sorrir,
            e das histórias que gostava de repetir.

            Queria poder te abraçar,
            e ter mais tempo para conversar.
            A saudade vem sem avisar,
            e faz meu coração apertar.

            Mas guardo você na lembrança,
            com carinho e esperança.
            Você sempre estará comigo,
            meu vô, meu eterno amigo.
        `,

        autor: "— Naélen Carvalho Betim"
    },

    {
        titulo: "Produção 2",

        texto: `
            Aqui entrará a segunda produção.

            Você pode escrever o texto normalmente,
            mantendo as quebras de linha e os parágrafos.

            Quando clicar em “Próxima”,
            esta produção será exibida.
        `,

        autor: "— Nome do estudante"
    },

    {
        titulo: "Produção 3",

        texto: `
            Aqui entrará a terceira produção.

            Você pode colocar um poema,
            uma memória, um relato ou qualquer
            outra produção realizada pelos estudantes.
        `,

        autor: "— Nome do estudante"
    }

];


let producaoAtual = 0;


/* ELEMENTOS DA PÁGINA */

const tituloProducao = document.getElementById("titulo-producao");
const textoProducao = document.getElementById("texto-producao");
const autorProducao = document.getElementById("autor-producao");

const botaoAnterior = document.getElementById("anterior-producao");
const botaoProxima = document.getElementById("proxima-producao");

const bolinhas = document.querySelectorAll("#bolinhas-producao span");


/* MOSTRAR PRODUÇÃO */

function mostrarProducao(indice) {

    const producao = producoes[indice];

    tituloProducao.textContent = producao.titulo;

    textoProducao.textContent = producao.texto.trim();

    autorProducao.textContent = producao.autor;


    /* Atualiza as bolinhas */

    bolinhas.forEach((bolinha, index) => {

        bolinha.classList.toggle(
            "ativa",
            index === indice
        );

    });

}


/* BOTÃO PRÓXIMA */

botaoProxima.addEventListener("click", function () {

    producaoAtual++;

    if (producaoAtual >= producoes.length) {
        producaoAtual = 0;
    }

    mostrarProducao(producaoAtual);

});


/* BOTÃO ANTERIOR */

botaoAnterior.addEventListener("click", function () {

    producaoAtual--;

    if (producaoAtual < 0) {
        producaoAtual = producoes.length - 1;
    }

    mostrarProducao(producaoAtual);

});
```
