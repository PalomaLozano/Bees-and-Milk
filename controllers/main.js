class Main {
  constructor() {
    this.products = [];
    this.min = 0;
    this.max = 5000;
  }

  async init() {
    this.initListenerInput();

    this.products = await fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((res) => res.products);
    console.log(this.products);
    this.products.forEach((card) => {
      this.createCard(card);
    });
  }

  initListenerInput() {
    const min = document.querySelector("#inputMin");
    const max = document.querySelector("#inputMax");

    min.addEventListener("change", (ev) => {
      this.min = ev.target.value;
      this.changeMinInputValue();
      console.log(ev.target.value);
    });

    max.addEventListener("change", (ev) => {
      this.max = ev.target.value;
      this.changeMaxInputValue();
      console.log(ev.target.value);
    });
  }

  cleanCard() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(cardElement =>{
      cardElement.remove();
    })
  }

  changeMinInputValue() {
    const filterProducts = this.products.filter(
      (card) => card.price >= this.min && card.price <= this.max
    );
    this.cleanCard();
    filterProducts.forEach(card=>{
      this.createCard(card)
    })
  }

  changeMaxInputValue() {
    const filterProducts = this.products.filter(
      (card) => card.price >= this.min && card.price <= this.max
    );
    this.cleanCard();
    filterProducts.forEach(card=>{
      this.createCard(card)
    })
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
    img.setAttribute("src", data.thumbnail);

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer");

    const title = document.createElement("h4");
    title.innerHTML = data.title;

    const price = document.createElement("h5");
    price.innerHTML = data.price;

    cardFooter.appendChild(title);
    cardFooter.appendChild(price);
    cardHeader.appendChild(img);

    card.appendChild(cardHeader);
    card.appendChild(cardFooter);

    container.appendChild(card);
  }
}

const main = new Main();
main.init();
