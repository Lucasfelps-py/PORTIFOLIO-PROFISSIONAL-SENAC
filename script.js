// 1. Selecionar os elementos do HTML

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const saudacao = document.querySelector("#saudacao");
const currentYear = document.querySelector("#current-year");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

// 2. Saudação dinâmica de acordo com o horário

function atualizarSaudacao() {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        saudacao.textContent = "Olá! Seja bem-vindo.";
    } else if (hora >= 12 && hora < 18) {
        saudacao.textContent = "Olá! Seja bem-vindo.";
    } else {
        saudacao.textContent = "Olá! Seja bem-vindo.";
    }
}

atualizarSaudacao();

// 3. Menu hambúrguer para dispositivos móveis

function fecharMenu() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
}

menuToggle.addEventListener("click", () => {
    const menuEstaAberto =
        menuToggle.getAttribute("aria-expanded") === "true";

    if (menuEstaAberto) {
        fecharMenu();
    } else {
        navLinks.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Fechar menu de navegação");
    }
});

// Fechar o menu após clicar em uma seção

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

// Fechar o menu com a tecla Escape

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharMenu();
        menuToggle.focus();
    }
});

// 4. Alternar entre modo claro e escuro

function atualizarBotaoTema(tema) {
    const modoClaro = tema === "light";

    themeIcon.textContent = modoClaro ? "☾" : "☀";

    themeToggle.setAttribute(
        "aria-label",
        modoClaro ? "Ativar modo escuro" : "Ativar modo claro"
    );
}

themeToggle.addEventListener("click", () => {
    const temaAtual = document.body.dataset.theme;
    const novoTema = temaAtual === "light" ? "dark" : "light";

    document.body.dataset.theme = novoTema;
    atualizarBotaoTema(novoTema);
});

// O site começa no modo escuro

atualizarBotaoTema("dark");

// 5. Atualizar o ano automaticamente no rodapé

currentYear.textContent = new Date().getFullYear();

// 6. Validar o formulário de contato

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
    const consentimento = document.querySelector("#consentimento").checked;

    // Verificar se os campos contêm informações válidas

    if (nome.length < 2) {
        formFeedback.textContent =
            "Digite um nome com pelo menos 2 caracteres.";
        return;
    }

    if (!email || !contactForm.elements.email.validity.valid) {
        formFeedback.textContent =
            "Digite um endereço de e-mail válido.";
        return;
    }

    if (mensagem.length < 10) {
        formFeedback.textContent =
            "A mensagem precisa ter pelo menos 10 caracteres.";
        return;
    }

    if (!consentimento) {
        formFeedback.textContent =
            "É necessário concordar com o uso dos dados para continuar.";
        return;
    }

    // Demonstração: os dados não são enviados para um servidor

    formFeedback.textContent =
        "Validação concluída! Este formulário ainda não envia mensagens. " +
        "Nenhum dado foi transmitido.";

    contactForm.reset();
});

// 7. Rolagem suave para o botão "Voltar ao topo"
const btnTopo = document.getElementById('btn-topo');

if (btnTopo) {
    btnTopo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}