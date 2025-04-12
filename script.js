// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Obtém elementos do DOM
    const calculateBtn = document.getElementById('calculate-btn');
    const ingredientsInput = document.getElementById('ingredients');
    const resultDisplay = document.getElementById('result');

    // Adiciona listener de clique ao botão de cálculo
    calculateBtn.addEventListener('click', calcularEnergia);

    // Função principal para calcular a energia mágica
    function calcularEnergia() {
        // Obtém o valor do input e divide em um array de ingredientes
        const input = ingredientsInput.value;
        const ingredientes = input.split(',').map(item => item.trim());

        // Filtra strings vazias do array
        const ingredientesFiltrados = ingredientes.filter(item => item.length > 0);

        // Calcula a energia total
        const energiaTotal = calcularEnergiaTotal(ingredientesFiltrados);

        // Exibe o resultado
        resultDisplay.textContent = `${energiaTotal} unidades`;
    }

    // Função para calcular a energia total baseada nos pares de ingredientes
    function calcularEnergiaTotal(ingredientes) {
        let energiaTotal = 0;

        // Processa os ingredientes em pares
        for (let i = 0; i < ingredientes.length; i += 2) {
            // Verifica se temos um par (ingrediente atual e o próximo)
            if (i + 1 < ingredientes.length) {
                const ingrediente1 = ingredientes[i];
                const ingrediente2 = ingredientes[i + 1];

                // Verifica combinações válidas e adiciona a energia correspondente
                if (
                    (ingrediente1 === 'Eye of Newt' && ingrediente2 === 'Dragon Scale') ||
                    (ingrediente1 === 'Dragon Scale' && ingrediente2 === 'Eye of Newt')
                ) {
                    energiaTotal += 50; // Combinação 1: 50 unidades
                } else if (
                    (ingrediente1 === 'Toad Slime' && ingrediente2 === 'Bat Wing') ||
                    (ingrediente1 === 'Bat Wing' && ingrediente2 === 'Toad Slime')
                ) {
                    energiaTotal += 30; // Combinação 2: 30 unidades
                } else if (
                    (ingrediente1 === 'Unicorn Horn' && ingrediente2 === 'Phoenix Feather') ||
                    (ingrediente1 === 'Phoenix Feather' && ingrediente2 === 'Unicorn Horn')
                ) {
                    energiaTotal += 100; // Combinação 3: 100 unidades
                }
                // Outras combinações não adicionam energia
            }
        }

        return energiaTotal;
    }

    // Opcional: Adiciona ingredientes de exemplo quando o input recebe foco
    ingredientsInput.addEventListener('focus', function () {
        if (!this.value) {
            this.value = 'Eye of Newt, Dragon Scale, Toad Slime, Bat Wing, Unicorn Horn, Phoenix Feather';
        }
    });
});