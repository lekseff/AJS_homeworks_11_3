import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
    quantity = 0;
    constructor(
        readonly id: number,
        readonly digital: true,
        readonly name: string,
        readonly author: string,
        readonly price: number,
    ) { }
}