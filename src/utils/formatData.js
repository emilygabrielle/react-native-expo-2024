export function formatDateToBrazilian(date){
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'   };
    return new Date(date).toLocaleDateString('pt-BR', options);
}