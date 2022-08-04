import React from 'react';

const RandomSent = () => {

    //Numeros Aleatórios e cópia da variável
    let numRandom = parseInt(Math.random() * 13);
    let numRandomAutor = numRandom;


    //Frases e Autores
    const frases = [

        "“Quando acordei hoje de manhã,eu sabia quem eu era, mas acho que já mudei muitas vezes desde então”",

        "“Foi há muito tempo, mas descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo. Porque, de um jeito ou de outro, ele sempre consegue escapar.”",

        "“O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem.”",

        "“Palavras são, na minha não tão humilde opinião, a nossa inesgotável fonte de magia. Capazes de ferir e de curar.”",

        "“Alguns infinitos são maiores que outros”",

        "“A imaginação foi a companheira de toda a minha existência, viva, rápida, inquieta, alguma vez tímida e amiga de empacar, as mais delas, capaz de engolir campanhas e campanhas, correndo…”",

        "“Que tempos penosos foram aqueles anos – ter o desejo e necessidade de viver, mas não a habilidade.”",

        "“Pretender-se que a vida dos homens seja sempre dirigida pela razão é destruir toda a possibilidade de vida.”",

        "“Que ninguém se engane, só consigo a simplicidade através de muito trabalho.”",

        "“Enquanto eles não se conscientizarem, não serão rebeldes autênticos e, enquanto não se rebelarem, não têm como se conscientizar.”",

        "“A cegueira também é isto, viver num mundo onde se tenha acabado a esperança.”",

        "“Há coisas que são preciosas por não durarem.”",

        "“Tudo o que temos de decidir é o que fazer com o tempo que nos é dado.”",
    ];

    const autor = [

        "Lewis Carroll, em Alice no País das Maravilhas",

        "Khaled Hosseini em O Caçador de Pipas",

        "Antoine de Saint-Exupéry em O Principezinho",

        "J.K Rowling em Harry Potter e as Relíquias da Morte",

        "John Green em A Culpa é das Estrelas",

        "Machado de Assis em Dom Casmurro",

        "Charles Bukowski em Misto Quente",

        "Tolstoi em Guerra e Paz",

        "Clarice Lispector em A Hora da Estrela",

        "George Orwell em 1984",

        "José Saramago em Ensaio sobre a Cegueira",

        "Oscar Wilde",

        "J.R.R Tolkien em O Senhor dos Anéis - A Sociedade do anel"
    ];

    return (

        <div className="container" style={{marginTop: "7%"}}>
            <h5 className="container col-6 text-center mt-5" style={{color: "grey"}}>
                <i>{frases[numRandom]}
                    <span style={{fontSize: "15px", color: "lightgrey"}} className="blockquote-footer citacao">{autor[numRandomAutor]}</span>
                </i>
            </h5>
        </div>
    )

};

export default RandomSent;
