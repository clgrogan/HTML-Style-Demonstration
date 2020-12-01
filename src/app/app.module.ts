import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxOverImageComponent } from './box-over-image/box-over-image.component';
import { ImgOverBoxComponent } from './img-over-box/img-over-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxOverImageComponent,
    ImgOverBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
