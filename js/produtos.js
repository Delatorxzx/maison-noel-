"use strict";

// BLOCO 01 — LISTA PRINCIPAL DE PRODUTOS

const produtos = [

    // BLOCO 02 — PRIMEIROS PRODUTOS
    {
        nome: "Panetone Trufado de Chocolate Belga",
        categoria: "panetones",
        descricao: "Massa artesanal com gotas de chocolate e recheio trufado.",
        preco: 69.90,
        imagem: "img/produtos/panetone-chocolate.jpg"
    },
    {
        nome: "Chocotone de Pistache",
        categoria: "panetones",
        descricao: "Chocotone macio com recheio cremoso de pistache.",
        preco: 79.90,
        imagem: "img/produtos/chocotone-pistache.jpeg"
    },
    {
        nome: "Panetone Tradicional",
        categoria: "panetones",
        descricao: "Receita clássica com frutas cristalizadas e uvas-passas.",
        preco: 54.90,
        imagem: "img/produtos/panetone-tradicional.jpg"
    },
    {
        nome: "Biscoitos Decorados de Natal",
        categoria: "biscoitos",
        descricao: "Biscoitos amanteigados decorados com glacê real.",
        preco: 29.90,
        imagem: "img/produtos/biscoitos-natalinos.jpg"
    },
    {
        nome: "Cookies de Chocolate",
        categoria: "biscoitos",
        descricao: "Cookies artesanais com pedaços de chocolate.",
        preco: 24.90,
        imagem: "img/produtos/cookies-chocolate.jpg"
    },
    {
        nome: "Bolo de Nozes com Doce de Leite",
        categoria: "bolos",
        descricao: "Bolo macio com nozes selecionadas e doce de leite.",
        preco: 84.90,
        imagem: "img/produtos/bolo-nozes.jpg"
    },
    {
        nome: "Torta Natalina de Morango",
        categoria: "bolos",
        descricao: "Massa delicada com creme e morangos frescos.",
        preco: 74.90,
        imagem: "img/produtos/torta-morango.jpg"
    },
    {
        nome: "Cesta Gourmet Maison Noël",
        categoria: "cestas",
        descricao: "Uma seleção especial de doces e produtos natalinos.",
        preco: 199.90,
        imagem: "img/produtos/cesta-natalina.jpg"
    },
    {
        nome: "Caixa Presente de Natal",
        categoria: "cestas",
        descricao: "Caixa especial com biscoitos e chocolates artesanais.",
        preco: 89.90,
        imagem: "img/produtos/caixa-presente.jpg"
    },
    {
        nome: "Chocolate Quente Cremoso",
        categoria: "chocolates",
        descricao: "Bebida cremosa de chocolate para os dias de Natal.",
        preco: 19.90,
        imagem: "img/produtos/chocolate-quente.jpg"
    },

    // BLOCO 03 — OUTROS PANETONES E CHOCOTONES
    {
        nome: "Panetone de Frutas Cristalizadas",
        categoria: "panetones",
        descricao: "Massa macia com frutas cristalizadas selecionadas.",
        preco: 59.90,
        imagem: "img/produtos/panetone-frutas.png"
    },
    {
        nome: "Chocotone de Brigadeiro",
        categoria: "panetones",
        descricao: "Recheio cremoso de brigadeiro artesanal.",
        preco: 74.90,
        imagem: "img/produtos/chocotone-brigadeiro.jpeg"
    },
    {
        nome: "Panetone de Doce de Leite",
        categoria: "panetones",
        descricao: "Panetone artesanal com recheio de doce de leite.",
        preco: 69.90,
        imagem: "img/produtos/panetone-doce-leite.jpeg"
    },
    {
        nome: "Chocotone de Avelã",
        categoria: "panetones",
        descricao: "Chocolate e creme de avelã em uma massa especial.",
        preco: 79.90,
        imagem: "img/produtos/chocotone-avela.jpeg"
    },
    {
        nome: "Panetone de Limão Siciliano",
        categoria: "panetones",
        descricao: "Massa leve com toque cítrico e cobertura branca.",
        preco: 64.90,
        imagem: "img/produtos/panetone-limao.webp"
    },
    {
        nome: "Chocotone Branco",
        categoria: "panetones",
        descricao: "Massa artesanal com gotas de chocolate branco.",
        preco: 72.90,
        imagem: "img/produtos/chocotone-branco.jpg"
    },
    {
        nome: "Mini Panetone Tradicional",
        categoria: "panetones",
        descricao: "Versão individual da receita tradicional.",
        preco: 19.90,
        imagem: "img/produtos/mini-panetone.jpeg"
    },

    // BLOCO 04 — BISCOITOS
    {
        nome: "Biscoitos de Gengibre",
        categoria: "biscoitos",
        descricao: "Biscoitos crocantes com especiarias natalinas.",
        preco: 32.90,
        imagem: "img/produtos/biscoitos-gengibre.jpg"
    },
    {
        nome: "Cookies de Red Velvet",
        categoria: "biscoitos",
        descricao: "Cookies macios com sabor red velvet.",
        preco: 34.90,
        imagem: "img/produtos/cookies-red-velvet.jpg"
    },
    {
        nome: "Amanteigados de Baunilha",
        categoria: "biscoitos",
        descricao: "Biscoitos delicados com aroma de baunilha.",
        preco: 26.90,
        imagem: "img/produtos/amanteigados-baunilha.jpeg"
    },
    {
        nome: "Cookies de Nozes",
        categoria: "biscoitos",
        descricao: "Cookies artesanais com pedaços de nozes.",
        preco: 31.90,
        imagem: "img/produtos/cookies-nozes.jpeg"
    },
    {
        nome: "Biscoitos de Canela",
        categoria: "biscoitos",
        descricao: "Receita tradicional com canela e açúcar.",
        preco: 25.90,
        imagem: "img/produtos/biscoitos-canela.jpg"
    },
    {
        nome: "Biscoitos de Amêndoas",
        categoria: "biscoitos",
        descricao: "Biscoitos crocantes preparados com amêndoas.",
        preco: 36.90,
        imagem: "img/produtos/biscoitos-amendoas.jpeg"
    },
    {
        nome: "Cookies de Chocolate Branco",
        categoria: "biscoitos",
        descricao: "Cookies amanteigados com chocolate branco.",
        preco: 29.90,
        imagem: "img/produtos/cookies-branco.jpeg"
    },
    {
        nome: "Caixa de Biscoitos Natalinos",
        categoria: "biscoitos",
        descricao: "Seleção de biscoitos decorados para presentear.",
        preco: 49.90,
        imagem: "img/produtos/caixa-biscoitos.jpeg"
    },

    // BLOCO 05 — BOLOS E TORTAS
    {
        nome: "Bolo de Chocolate com Avelã",
        categoria: "bolos",
        descricao: "Bolo de chocolate com creme de avelã.",
        preco: 89.90,
        imagem: "img/produtos/bolo-avela.jpg"
    },
    {
        nome: "Bolo Red Velvet",
        categoria: "bolos",
        descricao: "Massa red velvet com cobertura cremosa.",
        preco: 94.90,
        imagem: "img/produtos/bolo-red-velvet.webp"
    },
    {
        nome: "Torta de Limão Siciliano",
        categoria: "bolos",
        descricao: "Torta com creme cítrico e base crocante.",
        preco: 69.90,
        imagem: "img/produtos/torta-limao.png"
    },
    {
        nome: "Bolo de Cenoura com Chocolate",
        categoria: "bolos",
        descricao: "Bolo macio de cenoura com cobertura de chocolate.",
        preco: 64.90,
        imagem: "img/produtos/bolo-cenoura.jpeg"
    },
    {
        nome: "Torta de Chocolate Belga",
        categoria: "bolos",
        descricao: "Torta cremosa preparada com chocolate belga.",
        preco: 89.90,
        imagem: "img/produtos/torta-chocolate.jpg"
    },
    {
        nome: "Bolo de Coco Gelado",
        categoria: "bolos",
        descricao: "Bolo de coco com cobertura cremosa.",
        preco: 59.90,
        imagem: "img/produtos/bolo-coco.jpeg"
    },
    {
        nome: "Torta de Frutas Vermelhas",
        categoria: "bolos",
        descricao: "Creme suave com frutas vermelhas selecionadas.",
        preco: 79.90,
        imagem: "img/produtos/torta-frutas-vermelhas.jpg"
    },
    {
        nome: "Bolo de Amêndoas",
        categoria: "bolos",
        descricao: "Bolo artesanal com amêndoas e cobertura delicada.",
        preco: 84.90,
        imagem: "img/produtos/bolo-amendoas.jpeg"
    },
    {
        nome: "Torta de Doce de Leite",
        categoria: "bolos",
        descricao: "Base crocante com recheio de doce de leite.",
        preco: 74.90,
        imagem: "img/produtos/torta-doce-leite.jpg"
    },

    // BLOCO 06 — CESTAS E KITS
    {
        nome: "Kit Natal em Família",
        categoria: "cestas",
        descricao: "Seleção de doces para compartilhar em família.",
        preco: 159.90,
        imagem: "img/produtos/kit-familia.jpeg"
    },
    {
        nome: "Cesta de Chocolates",
        categoria: "cestas",
        descricao: "Uma seleção de chocolates artesanais.",
        preco: 129.90,
        imagem: "img/produtos/cesta-chocolates.jpeg"
    },
    {
        nome: "Kit Café de Natal",
        categoria: "cestas",
        descricao: "Biscoitos, café especial e acompanhamentos.",
        preco: 119.90,
        imagem: "img/produtos/kit-cafe.jpeg"
    },
    {
        nome: "Caixa Doce Encanto",
        categoria: "cestas",
        descricao: "Caixa com doces e pequenas delícias natalinas.",
        preco: 69.90,
        imagem: "img/produtos/caixa-doce-encanto.jpeg"
    },
    {
        nome: "Cesta Clássica de Natal",
        categoria: "cestas",
        descricao: "Uma combinação de produtos tradicionais.",
        preco: 179.90,
        imagem: "img/produtos/cesta-classica.jpeg"
    },
    {
        nome: "Kit Gourmet Premium",
        categoria: "cestas",
        descricao: "Produtos selecionados em uma embalagem especial.",
        preco: 219.90,
        imagem: "img/produtos/kit-premium.webp"
    },
    {
        nome: "Caixa de Mini Panetones",
        categoria: "cestas",
        descricao: "Seleção de mini panetones com sabores variados.",
        preco: 89.90,
        imagem: "img/produtos/caixa-mini-panetones.jpeg"
    },
    {
        nome: "Kit Biscoitos para Presentear",
        categoria: "cestas",
        descricao: "Biscoitos artesanais em embalagem para presente.",
        preco: 59.90,
        imagem: "img/produtos/kit-biscoitos.jpeg"
    },

    // BLOCO 07 — BEBIDAS E CHOCOLATES
    {
        nome: "Chocolate Quente com Canela",
        categoria: "chocolates",
        descricao: "Chocolate cremoso com um toque de canela.",
        preco: 22.90,
        imagem: "img/produtos/chocolate-canela.jpeg"
    },
    {
        nome: "Trufas de Chocolate Belga",
        categoria: "chocolates",
        descricao: "Trufas artesanais com cobertura de chocolate belga.",
        preco: 39.90,
        imagem: "img/produtos/trufas-belga.jpeg"
    },
    {
        nome: "Bombons de Pistache",
        categoria: "chocolates",
        descricao: "Bombons recheados com creme de pistache.",
        preco: 42.90,
        imagem: "img/produtos/bombons-pistache.jpeg"
    },
    {
        nome: "Drágeas de Chocolate",
        categoria: "chocolates",
        descricao: "Amêndoas cobertas com chocolate.",
        preco: 34.90,
        imagem: "img/produtos/drageas-chocolate.webp"
    },
    {
        nome: "Chocolate Quente com Marshmallow",
        categoria: "chocolates",
        descricao: "Bebida cremosa acompanhada de marshmallows.",
        preco: 24.90,
        imagem: "img/produtos/chocolate-marshmallow.jpeg"
    },
    {
        nome: "Trufas de Doce de Leite",
        categoria: "chocolates",
        descricao: "Trufas com recheio suave de doce de leite.",
        preco: 36.90,
        imagem: "img/produtos/trufas-doce-leite.jpeg"
    },
    {
        nome: "Caixa de Bombons Natalinos",
        categoria: "chocolates",
        descricao: "Bombons variados em uma caixa especial.",
        preco: 49.90,
        imagem: "img/produtos/bombons-natalinos.jpeg"
    },
    {
        nome: "Barras de Chocolate Artesanal",
        categoria: "chocolates",
        descricao: "Barras artesanais com ingredientes selecionados.",
        preco: 27.90,
        imagem: "img/produtos/barras-chocolate.jpeg"
    }
];

// BLOCO 08 — SELEÇÃO DOS ELEMENTOS HTML

const listaProdutos = document.getElementById("lista-produtos");
const quantidadeProdutos = document.getElementById("quantidade-produtos");
const mensagemProdutos = document.getElementById("mensagem-produtos");

const pesquisaProduto = document.getElementById("pesquisa-produto");
const filtroCategoria = document.getElementById("filtro-categoria");

// BLOCO 09 — FUNÇÃO PARA EXIBIR OS PRODUTOS

function exibirProdutos(lista) {
    listaProdutos.innerHTML = "";

    quantidadeProdutos.textContent =
        `${lista.length} ${lista.length === 1 ? "produto" : "produtos"}`;

    mensagemProdutos.hidden = lista.length !== 0;

    lista.forEach(produto => {
        const cartao = document.createElement("article");

        cartao.classList.add("cartao-produto");

        cartao.innerHTML = `
            <div class="cartao-produto__imagem">
                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >
            </div>

            <div class="cartao-produto__informacoes">
                <span class="cartao-produto__categoria">
                    ${produto.categoria}
                </span>

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <div class="cartao-produto__rodape">
                    <span>
                        ${produto.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </span>

                    <a href="contato.html" aria-label="Consultar sobre ${produto.nome}">
                        ↗
                    </a>
                </div>
            </div>
        `;

        listaProdutos.appendChild(cartao);
    });
}

// BLOCO 10 — FUNÇÃO DE PESQUISA E FILTRO

function filtrarProdutos() {
    const pesquisa = pesquisaProduto.value.toLowerCase();
    const categoria = filtroCategoria.value;

    const resultado = produtos.filter(produto => {
        const correspondeNome =
            produto.nome.toLowerCase().includes(pesquisa);

        const correspondeCategoria =
            categoria === "todos" || produto.categoria === categoria;

        return correspondeNome && correspondeCategoria;
    });

    exibirProdutos(resultado);
}

// BLOCO 11 — EVENTOS DOS CAMPOS DE PESQUISA E FILTRO

pesquisaProduto.addEventListener("input", filtrarProdutos);
filtroCategoria.addEventListener("change", filtrarProdutos);

// BLOCO 12 — EXIBIÇÃO INICIAL DOS PRODUTOS

exibirProdutos(produtos);