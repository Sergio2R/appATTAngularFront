import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DbzModule } from './dbz/dbz.module';
import { WineService } from './wine/services/wine.service';
import { WineModule } from './wine/wine.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DbzModule,
    WineModule
  ],
  providers: [ WineService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
