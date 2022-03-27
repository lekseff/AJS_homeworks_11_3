import Buyable from './Buyable';

export default class Movie implements Buyable {
  quantity = 0;
  constructor(
    readonly id: number,
    readonly digital: true,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly nameTranslate: string,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: string,
    ) {}
}