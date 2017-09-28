import {Component} from '@angular/core';
import {InputComponent} from "./fieldadaptor/input/input.component";
import {SelectComponent} from "./fieldadaptor/select/select.component";
import {CheckboxComponent} from "./fieldadaptor/checkbox/checkbox.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public FormFields = [
    {
      'type': 'text',
      'value': '',
      'component': InputComponent,
      'placeholder': 'Enter email'
    },
    {
      'type': 'select',
      'value': '',
      'component': SelectComponent,
      'child': [{
        'value': 'test',
        'displayname': 'test'
      },
        {
          'value': 'test1',
          'displayname': 'test1'
        }]
    },
    {
      'type': 'checkbox',
      'value': 'male',
      'label': 'Male',
      'component': CheckboxComponent,
    },
    {
      'type': 'checkbox',
      'value': 'female',
      'label': 'FeMale',
      'component': CheckboxComponent,
    }
  ];
}
