import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import{HttpClientModule} from '@angular/common/http';
import{NgxPaginationModule} from 'ngx-pagination';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
