document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    const statusMsg = document.getElementById('mensagem-status');
    statusMsg.textContent = "Mensagem enviada com sucesso! (simulação)";
    statusMsg.classList.remove('hidden');
    this.reset();
});