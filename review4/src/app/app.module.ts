import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DomtestingComponent } from './domtesting/domtesting.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentMockComponent } from './content-mock/content-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    DomtestingComponent,
    ContentProjectionComponent,
    ContentMockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
