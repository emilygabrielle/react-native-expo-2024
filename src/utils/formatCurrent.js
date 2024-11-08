export function formatCurrencyBRL(value) {
    return value.toLocaleString('pt-BR',  {
        style: 'currency', 
        currency: 'BRL' 
    });
}