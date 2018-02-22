import { ShoppingModule } from './shopping/shopping.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './core/components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AdminAuthGuard } from 'app/admin/services/admin-auth-guard.service';
import { CoreModule } from 'app/core/core.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    ShoppingModule,
    SharedModule,
    AdminModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
