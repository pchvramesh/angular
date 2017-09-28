import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {FieldadaptorComponent} from './fieldadaptor/fieldadaptor.component';
import {InputComponent} from './fieldadaptor/input/input.component';
import {CheckboxComponent} from './fieldadaptor/checkbox/checkbox.component';
import {SelectComponent} from './fieldadaptor/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldadaptorComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    InputComponent,
    CheckboxComponent,
    SelectComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
