import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.productService.read().subscribe( products =>{
      this.products = products
      console.log(products)
    })

  }

  Delete(product: Product){
    this.productService.delete(product).subscribe(()=>{
      this.productService.showMessage("Produto deletado sucesso!");
      this.router.navigate(['/'])
      
    })    
  }

}
