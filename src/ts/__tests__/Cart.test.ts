import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Smartphone from '../domain/Smartphone';
import Buyable from '../domain/Buyable';


describe('Add to cart', () => {
  let cart: any;
  let book: Buyable;
  let smartphone: Buyable;

  //Добавляет продукты
  const addProduct = (product: Buyable, count: number): void => {
    for (let i = 0; i < count; i++) {
      cart.add(product);
    }
  }

  beforeEach(() => {
    cart = new Cart();
    book = new Book(1010, true, 'Пикник на обочине', 'Стругацкие', 20000, 320);
    smartphone = new Smartphone(1040, false, 'Redmi note 10', 'Xiaomi', 30000);
  });

  test('new card should be empty', () => {
    expect(cart.totalCost()).toBe(0);
  });

  test('add an item to the cart', () => {
    const expected = [{ id: 1010, digital: true, name: 'Пикник на обочине', author: 'Стругацкие', price: 20000, pages: 320, quantity: 1 }];
    cart.add(book);
    expect(cart.items).toEqual(expected);
  });

  test('Add multiple digital', () => {
    addProduct(book, 3);
    expect(cart.items[0].quantity).toBe(1)
  });

  test('Add multiple not digital', () => {
    addProduct(smartphone, 4);
    expect(cart.items[0].quantity).toBe(4);
  });

  test('Reducing the quantity of goods in the cart', () => {
    addProduct(smartphone, 3);
    cart.reduce(1040);
    const received: Buyable = cart.items.find((product: Buyable) => product.id === 1040);
    expect(received.quantity).toBe(2)
  });

  test('Deletion when the number is 0', () => {
    cart.add(smartphone);
    cart.reduce(1040);
    const received: Buyable = cart.items.find((product: Buyable) => product.id === 1040);
    expect(received).toBeUndefined()
  });
})



describe('test discount, delete product', () => {
  let cart: any,
    book: Buyable,
    musicAlbum: Buyable,
    movie: Buyable;

  beforeEach(() => {
    cart = new Cart();
    book = new Book(1010, true, 'Пикник на обочине', 'Стругацкие', 20000, 320);
    musicAlbum = new MusicAlbum(1020, true, 'Meteora', 'Linkin Park', 10000);
    movie = new Movie(1030, true, 'Мстители', 15000, 2012, 'The Avengers', 'США', 'Avengers Assemble!', ['фантастика', ',боевик', 'фэнтези'], '137мин/2:17');
    cart.add(book);
    cart.add(musicAlbum);
    cart.add(movie);
  });

  test('Total cost for digital products', () => {
    expect(cart.totalCost()).toBe(45000);
  });

  test('Total cost all products', () => {
    const smartphone = new Smartphone(1040, false, 'Redmi note 10', 'Xiaomi', 30000);
    cart.add(smartphone);
    cart.add(smartphone);
    expect(cart.totalCost()).toBe(105000)
  });

  test('Total cost', () => {
    expect(cart.totalCost()).toBe(45000);
  });

  test('The total cost with a discount 50%', () => {
    expect(cart.totalCost(50)).toBe(22500);
  });


  test('delete a product', () => {
    const expected = [{ id: 1010, digital: true, name: 'Пикник на обочине', author: 'Стругацкие', price: 20000, pages: 320, quantity: 1 }];
    cart.remove(1020);
    cart.remove(1030);
    expect(cart.items).toEqual(expected);
  });
})
