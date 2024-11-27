function calcularOrcamento() {

    numConvidados = document.getElementById('convidados').value;
    evento = document.querySelector('input[name="eventType"]:checked').value;
    cardapio = document.querySelector('input[name="menuType"]:checked').value;

    precoPorPessoa = 0;
    if (cardapio == 'Churrasco') {
        precoPorPessoa = 50; 
    } else if (cardapio == 'Coquetel Premium') {
        precoPorPessoa = 70;
    } else if (cardapio == 'Festival de Massas') {
        precoPorPessoa = 40;
    }
    custoTotal = precoPorPessoa * numConvidados;

    document.getElementById('orcamento').textContent = ` R$ ${custoTotal}`;
}