class Portfolio{
    // constructor(){
    // }

    stocks = [
        {
            "name": "stock 1",
            "price": 1200,
            "date": "2021-01-20"
        },
        {
            "name": "stock 1",
            "price": 1500,
            "date": "2021-03-19"
        },
        {
            "name": "stock 1",
            "price": 2100,
            "date": "2021-04-03"
        },
        {
            "name": "stock 1",
            "price": 1500,
            "date": "2021-08-17"
        },
        {
            "name": "stock 1",
            "price": 1000,
            "date": "2021-11-22"
        },
        {
            "name": "stock 1",
            "price": 2190,
            "date": "2021-12-20"
        },
        {
            "name": "stock 1",
            "price": 3000,
            "date": "2022-01-21"
        }
    ];

    /*price(date){
        let price = 0;
        for(let i = 0; i < this.stocks.length; i++){
            if(this.stocks[i].date === date){
                price = this.stocks[i].price;
                //console.log(price)
            }
        }
        return price;
    }*/

    profit(start, end) {
        
        let init_price = 0;
        let final_price = 0;
        let stoacks_search = this.stocks.filter(item => {
            return Date.parse(item.date) >= Date.parse(start) && Date.parse(item.date) <= Date.parse(end);
        }).sort((a, b) => b.date - a.date);

        init_price = stoacks_search[0].price;
        final_price = stoacks_search[stoacks_search.length -1].price;
 
        let annualized_return = (((init_price/final_price) **(1/12)) -1) * 100;
        return annualized_return.toFixed(2);
    }
}

let obj = new Portfolio();
//console.log(obj.price('2021_12-20'))
console.log( 'Annualized return is :' + obj.profit('2021-01-01','2021-12-31') + '%');