import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';
import TvLed from './domain/TvLed';
import Buyable from './domain/Buyable';

const cart = new Cart();
console.log('Корзина до: ', cart.items);

const book = new Book(1010, true, 'Пикник на обочине', 'Стругацкие', 20000, 320);
const musicAlbum = new MusicAlbum(1020, true, 'Meteora', 'Linkin Park', 10000);
const movie = new Movie(1030, true, 'Мстители', 15000, 2012, 'The Avengers', 'США', 'Avengers Assemble!', ['фантастика', ',боевик', 'фэнтези'], '137мин/2:17');
const smartphone = new Smartphone(1040, false, 'Redmi note 10', 'Xiaomi', 30000);
const tv = new TvLed(1050, false, 'UE45', 'LG', 45, 50000);


//Добавляет продукты
const addProduct = (product: Buyable, count: number) => {
 for (let i = 0; i < count; i++) {
  cart.add(product);
 }
}

addProduct(book, 1);
addProduct(smartphone, 1);
addProduct(movie, 1);
addProduct(musicAlbum, 1);
addProduct(tv, 2);

// cart.reduce(1050);

console.log('Корзина: ', cart.items);
console.log('Стоимость без скидки: ', cart.totalCost());
