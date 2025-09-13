// Seleciona o botão
const btn = document.getElementById('acessar-grupo');

btn.addEventListener('click', () => {
    console.log('WhatsApp Grupo de Ofertas');
    
    gtag('event', 'click', {
        'event_category': 'Botão',
        'event_label': 'WhatsApp Grupo de Ofertas',
        'value': 1
    });
});
