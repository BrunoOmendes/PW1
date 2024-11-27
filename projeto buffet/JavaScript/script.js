function calcularOrcamento() {

    numConvidados = document.getElementById('convidados').value;
    evento = document.querySelector('input[name="eventType"]:checked').value;
    cardapio = document.querySelector('input[name="menuType"]:checked').value;
    
    precoPorPessoa = 0;
    if (cardapio == 'Churrasco') {
        precoPorPessoa = 125; 
    } else if (cardapio == 'Feijoada') {
        precoPorPessoa = 105;
    } else if (cardapio == 'Festival de Massas') {
        precoPorPessoa = 95;
    }
    custoTotal = precoPorPessoa * numConvidados;

    document.getElementById('orcamento').textContent = ` R$ ${custoTotal
    }`;
}
