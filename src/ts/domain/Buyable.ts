export default interface Buyable {
    readonly id: number,
    readonly digital: boolean,
    readonly name: string,
    readonly price: number,
    quantity: number,
}