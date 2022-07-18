class Main {
    constructor(){
        this.products = [];
        this.min = 0;
        this.max = 5;

    }

    async init() {
        
        this.products = await fetch('https://api.imgflip.com/get_memes')
        .then(data => data.json())
        .then(res => res);
        console.log(this.products);
    }
}

const main = new Main();
main.init();





