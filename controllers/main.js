class Main {
  constructor() {
    this.products = [];
    this.min = 0;
    this.max = 5;
  }

  async init() {

    this.initListenerInput();

    this.products = await fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json()) 
      .then((res) => res.data.memes);
      console.log(this.products);
    this.products.forEach((card) => {
      this.createCard(card);
    });
  }

  initListenerInput(){
    const min = document.querySelector('#inputMin');
    const max = document.querySelector('#inputMax');

    min.addEventListener('change', function(ev){
        console.log(ev.target.value);
    });

    max.addEventListener('change', function(ev){
        console.log(ev.target.value);
    });

  }

  createCard(data) {
    const container = document.querySelector(
      ".best-sellers .row-cols-1.row-cols-md-2.row-cols-lg-2"
    );
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", data.id);

    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");

    const img = document.createElement("img");
    img.setAttribute("src", data.url);

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer");

    const title = document.createElement("h4");
    title.innerHTML = data.name;

    cardFooter.appendChild(title);
    cardHeader.appendChild(img);

    card.appendChild(cardHeader);
    card.appendChild(cardFooter);

    container.appendChild(card);
  }
}

const main = new Main();
main.init();
