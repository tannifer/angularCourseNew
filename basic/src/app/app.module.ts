import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule} from '@angular/forms';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ItemRendererComponent } from './item-renderer/item-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    PlaceholderComponent,
    ItemRendererComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

