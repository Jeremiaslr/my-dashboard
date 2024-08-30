import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, Input, input, output, Output } from '@angular/core';
import { Product } from '@interfaces/prodruct.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  // @Input({ required: true }) public product!: Product
  public product = input.required<Product>()

  // @Output() public onIncrementQuantity = new EventEmitter<number>()
  public onIncrementQuantity = output<number>()

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1)

  }

  public loginEffect = effect(() => {
    console.log(this.product().name)
  })



}
