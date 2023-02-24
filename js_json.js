//Método fetch() para buscar o arquivo dados.json transformando o resultado em um objeto usando o método response.json()

function Myfunction() {

    fetch('dados.json')
        .then(response => response.json())
        .then(corpo => {

            //Acessando os dados do objeto JSON e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)

                document.getElementById('imagem').innerHTML = corpo.rock.image;
                document.getElementById('nome').innerHTML = corpo.rock.name;
                document.getElementById('disco').innerHTML = corpo.rock.album;
                document.getElementById('gravadora').innerHTML = corpo.rock.records;
                document.getElementById('estilo').innerHTML = corpo.rock.style;
                document.getElementById('preco').innerHTML = corpo.rock.price;
        })
}

function Myfunction1() {

    fetch('dados.json')
        .then(response => response.json())
        .then(corpo => {

            //Acessando os dados do objeto JSON e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)

                document.getElementById('imagem').innerHTML = corpo.rock1.image;
                document.getElementById('nome').innerHTML = corpo.rock1.name;
                document.getElementById('disco').innerHTML = corpo.rock1.album;
                document.getElementById('gravadora').innerHTML = corpo.rock1.records;
                document.getElementById('estilo').innerHTML = corpo.rock1.style;
                document.getElementById('preco').innerHTML = corpo.rock1.price;
        })
}

function Myfunction2() {

    fetch('dados.json')
        .then(response => response.json())
        .then(corpo => {

            //Acessando os dados do objeto JSON e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)

                document.getElementById('imagem').innerHTML = corpo.rock2.image;
                document.getElementById('nome').innerHTML = corpo.rock2.name;
                document.getElementById('disco').innerHTML = corpo.rock2.album;
                document.getElementById('gravadora').innerHTML = corpo.rock2.records;
                document.getElementById('estilo').innerHTML = corpo.rock2.style;
                document.getElementById('preco').innerHTML = corpo.rock2.price;
        })
}