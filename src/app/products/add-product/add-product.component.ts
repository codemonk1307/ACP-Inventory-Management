import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

var productList

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = this.formBuilder.group({
    name: new FormControl(name, [
      Validators.required,
      Validators.minLength(4),
    ]),
    // name: '',
    description: '',
    category:'',
    id : 401,
    qty: 1
  });

  productList : Product[]
  addedProduct: boolean = false
  duplicate: boolean = false

  get name() { return this.productForm.get('name'); }

  model : Product = {id: 10, name: '', description: '', category:'', imageUrl: '', qty: 10}

  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryNameFromRoute = routeParams.get('category');
    this.model.category = categoryNameFromRoute
    this.product.getProducts().subscribe(products => {
      this.productList = products
    })

  }

  onSubmit(): void {
    var itemExists: boolean = false
    console.log('prev',this.productList)

    this.model.name = this.productForm.value.name
    this.model.description = this.productForm.value.description

    this.model.qty = this.productForm.value.qty

    this.model.id = Math.floor((Math.random()*(956487-69) + 69))
    
    // console.log(this.model.id)

    this.productList.forEach(item => {
      if(item.name.toUpperCase() == this.model.name.toUpperCase()) {itemExists = true}
    })

    // console.log(this.model)

    if(!itemExists){
      this.product.addProduct(this.model)

      this.addedProduct = true
      this.product.getProducts().subscribe(products => {
        productList = products
      })

      this.productList = productList
      console.log(this.productList)
      this.productForm.reset();

      (async () => { 
        await delay(300);
        document.location.reload();
        })();
    }

    else {
      this.duplicate = true
      console.log('duplicate')
    }
  }

}
