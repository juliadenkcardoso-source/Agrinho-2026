function calcularConsumo() {
    // Pegando os valores digitados pelo usuário
    const area = parseFloat(document.getElementById('area').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    
    // Validação simples para não calcular campos vazios
    if (isNaN(area) || isNaN(tempo) || area <= 0 || tempo <= 0) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    // Conta fictícia baseada em médias gerais de irrigação convencional
    // (Aproximadamente 5000 litros por hectare por hora)
    const consumoEstimado = area * tempo * 5000; 

    // Selecionando os elementos HTML do resultado
    const resultadoSeccao = document.getElementById('resultado');
    const consumoTexto = document.getElementById('consumoTexto');
    const dicaSustentavel = document.getElementById('dicaSustentavel');

    // Mostrando a caixinha de resultado tirando a classe 'hidden'
    resultadoSeccao.classList.remove('hidden');

    // Inserindo o texto de consumo na tela
    consumoTexto.innerHTML = `Seu gasto estimado atual é de <strong>${consumoEstimado.toLocaleString('pt-BR')} litros</strong> de água por dia.`;

    // Lógica para dar dicas personalizadas
    if (tempo > 4) {
        dicaSustentavel.innerHTML = `💡 <strong>Dica do Agrinho:</strong> Seu tempo de irrigação está alto! Considere implementar o <strong>sistema de gotejamento</strong>, que aplica a água direto na raiz e reduz o desperdício em até 60%.`;
    } else {
        dicaSustentavel.innerHTML = `💡 <strong>Dica do Agrinho:</strong> Ótimo manejo do tempo! Para economizar ainda mais, prefira irrigar nas <strong>horas mais frescas do dia</strong> (início da manhã ou fim da tarde) para evitar a evaporação rápida da água.`;
    }
}