// Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two', 
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
    },
});

tl.to(
    '#fanta',
    {
        top:'120%', //MOVE O ELEMENTO COM O ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
    //Nomeando este trecho de animação como 'orange' para sincronização
);

tl.to(
    '#laranja-cortada',
    {
        top: '165%', // Move o elemento com id 'laranja-cortada' para 160% do top
        left: '23%', // Move o elemento para 23% da esquerda
    },
    'orange'
); // Sincronizado com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width:'18%', //Reduz a largura do elemento com id 'laranja' para 15%
        top: '164%', // Move o elemento para 150% do topo
        right: '10%', //Move o elemento para 10% da direita
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha',
    {
        top: '100%', // Move o elemento com id folha para 110% do topo
        rotate: '500deg', // Rotaciona o elemento em 130 graus
        left: '70%', // Move o elemento para 70% para a esquerda
    },
    'orange'
); //Sincronozado com a animação nomeada 'orange'

tl.to(
    '#folha2',
    {
        top: '110%', // Move o elemento com id folha para 110% do topo
        rotate: '130deg', // Rotaciona o elemento em 130 graus
        left: '0%', // Move o elemento para 0% para a esquerda
    },
    'orange'
); //Sincronozado com a animação nomeada 'orange'

// Criando outra timeline

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.three',
        start: '0% 95%',
        end: '20% 50%', // fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
    },
});

// Definindo a animação dos elementos com a timeline 'tl2'

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', // Inicia o elemento com class 'lemon1' otancionando em -90 graus
        left: '-100%', // Inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); // Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '#cocacola', 
    {
        rotate: '-90deg', // Inicia o elemento com id 'cocacola' otancionando em -90 graus
        left: '-100%', // Inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); // Sincronizado com a animação nomeada 'ca'

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);


tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);