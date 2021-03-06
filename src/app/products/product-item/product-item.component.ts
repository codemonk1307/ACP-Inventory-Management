import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(
    private msg: MessengerService,
    private cartService : CartService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    // console.log(this.productItem.qty)
    if (this.productItem.qty>0){
      this.cartService.addProductToCart(this.productItem).subscribe(()=> {
        this.msg.sendMsg(this.productItem)
      })
      this.cartService.reduceQty(this.productItem).subscribe(()=> {
        this.msg.sendMsg(this.productItem)
      })
    }
  }

  decQty(){
    if (this.productItem.qty>0){
      this.cartService.reduceQty(this.productItem).subscribe(()=> {
        this.msg.sendMsg(this.productItem)
      })
    }
  }

  incQty(){
    this.cartService.incQty(this.productItem).subscribe(()=> {
      this.msg.sendMsg(this.productItem)
    })
  }
}
