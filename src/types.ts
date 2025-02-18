export interface CartItem {
  readonly id: string;
  name: string;
  price: number;
  quantity?: number; // Optional, defaults can be managed in logic
}
