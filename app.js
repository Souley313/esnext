let cl = console.log;

let favoriteCityId = "rome";
cl(favoriteCityId);

favoriteCityId = "Paris";
cl(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
cl(citiesId);

/*citiesId = [];
cl(citiesId);*/

citiesId.push("Tokyo");
cl(citiesId);

function getWeather(cityId){
    this.city = cityId ;
    this.temprature = 20;
};

const weather = new getWeather(favoriteCityId.toUpperCase());
cl(weather);

const city = weather.city;
cl(city);
const temprature = weather.temprature;
cl(temprature);

const [parisId, nycId, ...othersCitiesId] = citiesId;
cl(parisId);
cl(nycId);
cl(othersCitiesId);



class Trip{
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    get price(){
        return this._price;
    }
        
    set price(newPrice) {
        this._price = newPrice;
    }

    // création d'une méthode static
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg');
    }

    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', '+this.imageUrl+', ' + this.price + ']';
    }
}

let parisTrip = new Trip('paris','Paris','img/paris.jpg');
parisTrip.price = 100;
cl(parisTrip.toString());
cl(parisTrip.name);

const defaultTrip = Trip.getDefaultTrip();
cl(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id, name, imageUrl, price){
        super(id, name, imageUrl);
        this.price = 0;
    }
    toString() {
        return 'free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes','Nantes','img/nantes');
cl(freeTrip.toString());


class TripService {
    constructor() {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
            }, 2000)
        });
    }
}

class PriceService {
    constructor() {
    // TODO Map of 2 trips
    // 'paris' --> price == 100
    // 'rio-de-janeiro' --> price == 800)
    // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                }, 2000)
        });
    }
}
    