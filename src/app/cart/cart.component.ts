import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  dispatchFlag = false;
  adminFlag: boolean

  // cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
    this.adminFlag = this.adminService.adminFlag
    console.log(this.adminFlag)
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      // console.log(this.cartItems)
      // this.calcCartTotal();
    })
  }

  dispatch() {
    return this.dispatchFlag = true
  }

  // calcCartTotal() {
  //   this.cartTotal = 0
  //   this.cartItems.forEach(item => {
  //     this.cartTotal += (item.qty * item.price)
  //   })
  // }
}
