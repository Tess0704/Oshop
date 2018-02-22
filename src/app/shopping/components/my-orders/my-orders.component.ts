
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { async } from 'q';
import { OrderService } from '../../../shared/services/order.service';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: any[] = [];
  uid: string;
  constructor(private authService: AuthService, private orderService: OrderService, private userService: UserService) {

   }

   ngOnInit() {
    this.authService.user$.switchMap(u => this.orderService.getOrdersByUser(u.uid) ).subscribe(order => {
      for ( let i = 0; i < order.length; i++) {

       this.userService.get(order[i].userId).subscribe(result => {
         this.orders.push({
           datePlaced: order[i].datePlaced,
           userName : result.name
         });
       });

    }
 });

 }

}
