import { Component } from '@angular/core';

@Component({
  selector: 'app-deliveries-by-neighborhood',
  standalone: true,
  imports: [],
  templateUrl: './deliveries-by-neighborhood.component.html',
  styleUrl: './deliveries-by-neighborhood.component.scss'
})
export class DeliveriesByNeighborhoodComponent {
  products!: Product[];

  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.productService.getProducttsMini().then((data) => {
      this.products = data;
    })
  }


}
