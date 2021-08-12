import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  createProduct(): void {
    console.log(this.product)
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação Executada com sucesso!')
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }


}
