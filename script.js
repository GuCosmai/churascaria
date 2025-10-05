// Aguarda o carregamento completo do conteúdo da página
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o AOS
  AOS.init({
    duration: 1000, // Duração da animação em ms
    once: true, // Se a animação deve acontecer apenas uma vez
  });

  // Lógica para o menu mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
    });
  }

  // Lógica para fechar o menu mobile ao clicar num link
  const mobileNavLinks = document.querySelectorAll("#mobile-menu a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("is-open");
      }
    });
  });

  // Lógica para o formulário de reserva
  const form = document.getElementById("reservation-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio real do formulário

      // Número de WhatsApp do restaurante (removendo o '+' e espaços)
      const numeroRestaurante = "5511950506289";

      // Coleta os dados do formulário
      const nome = form.querySelector('[name="nome"]').value;
      const email = form.querySelector('[name="email"]').value;
      const telefone = form.querySelector('[name="telefone"]').value;
      const pessoas = form.querySelector('[name="pessoas"]').value;
      const data = form.querySelector('[name="data"]').value;
      const hora = form.querySelector('[name="hora"]').value;

      // Monta a mensagem
      const mensagem = `
*Novo Pedido de Reserva*

*Nome:* ${nome}
*Email:* ${email}
*Telefone:* ${telefone}
*Nº de Pessoas:* ${pessoas}
*Data:* ${data}
*Hora:* ${hora}
      `;

      // Codifica a mensagem para a URL
      const mensagemCodificada = encodeURIComponent(mensagem);

      // Cria o link do WhatsApp
      const linkWhatsApp = `https://wa.me/${numeroRestaurante}?text=${mensagemCodificada}`;

      // Redireciona para o WhatsApp
      window.location.href = linkWhatsApp;
    });
  }

  // Lógica para o Modal de Imagens
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const thumbnails = document.querySelectorAll(".menu-thumbnail");
  const closeModal = document.querySelector(".close-modal");

  thumbnails.forEach(img => {
    img.addEventListener("click", function() {
      modal.classList.remove("hidden");
      modalImg.src = this.src;
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", function() {
      modal.classList.add("hidden");
    });
  }

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.classList.add("hidden");
    }
  });
});