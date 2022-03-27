import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  /**
   * Добавляет в козину
   */
  add(item: Buyable): void {
    const found: number = this._items.findIndex(product => product.id === item.id);

    if (found == -1) {
      item.quantity = 1;
      this._items.push(item);
    }

    if (found !== -1 && item.digital == false) {
      this._items[found].quantity += 1;
    }
  }

  /**
   * Уменьшает количество в корзине
   * @param id 
   */
  reduce(id: number): void {
    const current: number = this._items.findIndex(item => item.id === id);
    this._items[current].quantity -= 1;
    if (this._items[current].quantity === 0) {
      this.remove(id);
    }
  }

  /**
   * 
   * @param value Размер скидки в %
   * @returns Общая стоимость со скидкой или без
   */
  totalCost(value?: number): number {
    const itemsList: Buyable[] = [...this._items];
    if (itemsList.length === 0) return 0;
    const totalCost: number = itemsList.reduce((acc, item) => acc += item.price * item.quantity, 0);
    return (!value) ? totalCost : totalCost - totalCost * value / 100;
  }

  /**
   * Удаляет товар из корзины
   * @param id - id товара
   */
  remove(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }

  /**
   * Возвращает массив элементов корзины
   */
  get items(): Buyable[] {
    return [...this._items];
  }
}
