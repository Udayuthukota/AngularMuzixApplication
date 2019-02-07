import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
// import { LogoComponent } from './logo/logo.component';
import { GetAllComponent } from './get-all/get-all.component'
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    GetAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
