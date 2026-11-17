// ============================================================
//  PRODUTOS DA FORNADA DO DIA
//  Edite aqui para mudar os cartões do site. Cada produto é um bloco { ... }.
//
//  id         → nome único, sem espaços nem acentos (ex.: 'pao-de-queijo')
//  categoria  → 'levain', 'folhados' ou 'cafes' (veja a lista de categorias abaixo)
//  nome       → título do cartão
//  descricao  → texto pequeno embaixo do nome
//  preco      → em reais, com PONTO no lugar da vírgula: 28 = R$ 28,00 · 12.5 = R$ 12,50
//  imagem     → opcional. Coloque a foto na pasta public/produtos/ e escreva só o nome
//               do arquivo, ex.: 'levain.jpg'. Deixe '' para mostrar o desenho padrão.
//
//  Para adicionar um produto: copie um bloco { ... } inteiro (com a vírgula), cole embaixo e mude os dados.
//  Para remover: apague o bloco inteiro, do { até o },
// ============================================================

// shortcut: produtos e preços de exemplo, troque pelos reais da padaria
export const produtos = [
  {
    id: 'levain',
    categoria: 'levain',
    nome: 'Pão de Levain',
    descricao: 'Fermentação de 48h, 800g',
    preco: 28,
    imagem: 'pao_levain.jpg',
  },
  {
    id: 'baguete',
    categoria: 'levain',
    nome: 'Baguete Tradicional',
    descricao: 'Crosta crocante, 250g',
    preco: 12,
    imagem: 'baguete_tradicional.jpg',
  },
  {
    id: 'integral',
    categoria: 'levain',
    nome: 'Pão Integral com Grãos',
    descricao: 'Grãos orgânicos, 700g',
    preco: 32,
    imagem: 'Pao_integral_graos.jpg',
  },
  {
    id: 'focaccia',
    categoria: 'levain',
    nome: 'Focaccia de Alecrim',
    descricao: 'Azeite e sal grosso, 500g',
    preco: 24,
    imagem: 'focaccia_de_alecrim.jpg',
  },
  {
    id: 'croissant',
    categoria: 'folhados',
    nome: 'Croissant de Manteiga',
    descricao: 'Manteiga francesa, unidade',
    preco: 11,
    imagem: 'Croissant_de_Manteiga.jpg',
  },
  {
    id: 'pain-chocolat',
    categoria: 'folhados',
    nome: 'Pain au Chocolat',
    descricao: 'Chocolate 70% cacau, unidade',
    preco: 13,
    imagem: 'Pain_au_chocolat.jpg',
  },
  {
    id: 'cafe',
    categoria: 'cafes',
    nome: 'Café Especial',
    descricao: 'Grãos moídos na hora, 250g',
    preco: 45,
    imagem: 'cafe_especial.jpg',
  },
  {
    id: 'brunch',
    categoria: 'cafes',
    nome: 'Kit Brunch',
    descricao: 'Pão, geleia, manteiga e queijo',
    preco: 79,
    imagem: 'Kit_brunch.jpg',
  },
]

// Botões de filtro. 'todos' mostra tudo; os outros ids são o que vai no campo categoria acima.
export const categorias = [
  { id: 'todos', nome: 'Todos os produtos' },
  { id: 'levain', nome: 'Pães de Levain' },
  { id: 'folhados', nome: 'Folhados & Viennoiserie' },
  { id: 'cafes', nome: 'Cafés & Brunch' },
]
