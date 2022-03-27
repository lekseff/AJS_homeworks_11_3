import Buyable from './Buyable';

export default class Smartphone implements Buyable {
 quantity = 0;
 constructor(
  readonly id: number,
  readonly digital: false,
  readonly name: string,
  readonly manufacturer: string,
  readonly price: number,
 ) { }
}