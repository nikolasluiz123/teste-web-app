document.querySelector('form[name="contato"]').addEventListener('submit', function() {
    document.getElementById('mensagem-status').textContent = "Mensagem enviada! Obrigado.";
    document.getElementById('mensagem-status').classList.remove('hidden');
});