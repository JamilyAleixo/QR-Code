// Obtém uma referência ao elemento de input no documento HTML
const input = document.querySelector("input");

// Obtém uma referência ao elemento com o id "qrcode" no documento HTML
const qrcode = document.querySelector("#qrcode");

// Adiciona um ouvinte de evento para o evento "keypress" em todo o documento
document.addEventListener("keypress", (e) => {
  // Verifica se a tecla pressionada é a tecla "Enter"
  if (e.key === "Enter") {
    // Chama a função genQRCode() quando a tecla "Enter" é pressionada
    genQRCode();
  }
});

// Define a função genQRCode() para gerar um código QR com base no valor do input
function genQRCode() {
  // Verifica se o valor do input está vazio
  if (!input.value) return;

  // Atualiza a fonte (src) do elemento de imagem com um código QR gerado
  qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}
