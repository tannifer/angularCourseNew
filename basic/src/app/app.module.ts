import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule} from '@angular/forms';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ItemRendererComponent } from './item-renderer/item-renderer.component';
import { ValComponent } from './val/val.component';
import { CustableComponent } from './custable/custable.component';
import { UsingCustableComponent } from './using-custable/using-custable.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    PlaceholderComponent,
    ItemRendererComponent,
    ValComponent,
    CustableComponent,
    UsingCustableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

