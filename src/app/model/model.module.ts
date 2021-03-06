import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import {Cart} from './cart.model';
import {OrderRepository} from './order.repository';
import {Order} from './order.model';
import {RestDatasource} from './rest.datasource';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './AuthService';
import {ConnectionService} from './connection.service';

@NgModule({
  imports : [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository, {provide: StaticDataSource, useClass: RestDatasource}, RestDatasource, AuthService, ConnectionService]
})
export class ModelModule { }
