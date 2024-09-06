# Sobre o Projeto
Este projeto foi desenvolvido como parte de um estudo para explorar o consumo de APIs e a implementação de busca dinâmica utilizando React Native. O aplicativo consome dados da API pública de Rick and Morty, permitindo ao usuário pesquisar personagens em tempo real através de um campo de busca.


<div>
 <img alt="Capa1" src="./src/assets/Frame 1.png"/>
 <img alt="Capa2" src="./src/assets/Frame 2.png"/>

</div>

**Frontend:**

- React native - Expo📲
- Typescript 🟦
- Styled-Components🖌️
- Axios


**Backend:**
 - **API** - [Acesso ao repositorio](https://rickandmortyapi.com/api/character)
...

# Finalidade do projeto 🌐
    
Este Projeto foi para treinar mesu conhecimentos em consumo de API e Filtragem


## Sobre o desafio 🎯

Desenvolver um aplicativo que consumisse um api e que mostra-se os detalhes de cada personagem e fizesse uma busca por eles.

- Tela inicial
- Consumo da API
- Listagem dos personagens
- Modal com detalhes dos personagens
- Filtro de busca



## Tecnologias utilizadas 🖥️

1. **React & TypeScript**: Este projeto foi criado com o React native, uma biblioteca JavaScript popular para a criação de interfaces de usuário, e o TypeScript, uma versão do JavaScript tipada estaticamente.




## Como rodar o projeto 🖥️

Para executar este projeto em sua máquina local, execute as etapas:
1. Clone o projeto em sua maquina 
2. Entre na pasta ``mobile`` e instale as dependências do projeto atraves do terminal com ``yarn install`` ou ``npm install``
3. Entre na pasta ``api`` e instale as dependecias  com ``yarn install`` ou ``npm install``
4. Dentro da pasta ``mobile``, em ``src/services/api.ts`` altere para seu ip local: ``baseURL: 'http://AQUI_VAI_O_SEU_ENDEREÇO_IP:3333'``
5. Rode o comando ``npm run dev`` dentro de ``api`` para iniciar o server
6. Para executar o App, na pasta ``mobile`` rode no terminal o comando ``expo start`` e scanneie  o ``QRCODE`` para abrir no seu dispositivo fisico ou escolha a opção ``A`` caso tenha configurado o emulador no seu PC.
7. Caso queira rodar o App no seu dispositivo, e necessario ter já instalado o aplicativo [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)



