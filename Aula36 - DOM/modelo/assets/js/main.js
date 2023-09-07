const elementos = [
    {tag: "p", texto:"frase 1"},
    {tag: "div", texto:"frase 2"},
    {tag: "footer", texto:"frase 3"},
    {tag: "section", texto:"frase 4"},
];

const area = document.querySelector("#resultado");

const div = document.createElement('div');
// o professor criou um objeto antes de adicionar diretamente


for(let i=0; i < elementos.length; i++){

    // ele desestrurou os elementos individuais para tornar menos verboso, depois isolou criando tag isoladas e adicionando a div.

    const {tag, texto} = elementos[i];

    const tagCriada = document.createElement(tag);

    tagCriada.innerHTML = texto;

    // inves do innerHTML poderia se usar o innerText; sendo mais recomendavel para o texto
    // poderia tambem criar uma variavel que seria um no de texto -> document.createTextNode(texto); e depois sendo adicionada a tag criada por meio do .appendChild(variavel)

    div.appendChild(tagCriada);

    // area.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`;
};

area.appendChild(div);

