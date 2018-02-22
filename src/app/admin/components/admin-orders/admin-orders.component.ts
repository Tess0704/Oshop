import { Order } from '../../../shared/models/order';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { async } from 'q';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: any[] = [];
  constructor(private orderService: OrderService, private userService: UserService) {

   }
  ngOnInit() {
     this.orderService.getOrders().subscribe(order => {
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
