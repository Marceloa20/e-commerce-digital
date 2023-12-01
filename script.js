var lista  = document.getElementById('lista')

const listaDeCamisas = [
    {
      nome: "Manchester City",
      descricao: "Garanta sua camisa oficial do Manchester City e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 189,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/98416614.jpg"
    },
    {
      nome: "AC Milan",
      descricao: "Garanta sua camisa oficial do Milan e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 199,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/M0YNWA06.jpg"
    },
    {
      nome: "Arsenal",
      descricao: "Garanta sua camisa oficial do Arsenal e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 179,99",
      url: "https://static.netshoes.com.br/produtos/camisa-arsenal-home-2223-sn-torcedor-adidas-masculina/88/3ZP-7228-388/3ZP-7228-388_zoom1.jpg?ts=1695700135&ims=544x"
    },
    {
      nome: "Barcelona",
      descricao: "Garanta sua camisa oficial do Barcelona e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 169,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/98304323.jpg"
    },
    {
      nome: "Borussia Mönchengladbach",
      descricao: "Garanta sua camisa oficial do Borussia Mönchengladbach e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 189,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/92550001.jpg"
    },
    {
      nome: "Sevilla",
      descricao: "Garanta sua camisa oficial do Sevilla e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 179,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/91032049.jpg"
    },
    {
      nome: "Real Madrid",
      descricao: "Garanta sua camisa oficial do Real Madrid e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 169,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/M0YSBF01.jpg"
    },
    {
      nome: "Everton",
      descricao: "Garanta sua camisa oficial do Everton e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 189,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/88148705.jpg"
    },
    {
      nome: "Lazio",
      descricao: "Garanta sua camisa oficial da Lazio e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 179,99",
      url: "https://static.netshoes.com.br/produtos/camisa-macron-lazio-20202021-home-masculina/08/H62-0074-008/H62-0074-008_zoom1.jpg?ts=1694839402&ims=544x"
    },
    {
      nome: "Flamengo",
      descricao: "Garanta sua camisa oficial do Flamengo e faça parte desta jornada emocionante. Mostre sua devoção, celebre a tradição e vista as cores que representam mais que um clube: representam uma paixão inigualável pelo futebol.",
      preco: "R$ 169,99",
      url: "https://imgcentauro-a.akamaihd.net/768x768/M0QARE2V.jpg"
    }
];

function carregar() {
    for(let i = 1; i <= 10; i++) {
        lista.innerHTML +=
        `<div class="col" style="margin: 5% 0">
        <div class="card" style="width: 17rem">
        <div>
          <img src="${listaDeCamisas[i].url}" class="card-img-top" alt="">
        </div>
        <div class="card-body">
          <h4 class="card-title"><strong>${listaDeCamisas[i].nome}</strong></h4>
          <p class="card-text">${listaDeCamisas[i].descricao}</p>
          <h4 class="card-text">${listaDeCamisas[i].preco}</h4>
          <a href="/checkout.html" class="btn btn-primary">Comprar</a>
        </div>
      </div>`
    }
}