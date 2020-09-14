import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  // templateUrl: './test.component.html',

  // {{}} = This is called as "Interpolation" (In AngularJs, expression)
  template: `
          <div>
            Interpolation SYMBOL {{interpolationSymbol}}
              <div class="content">
                Welcome {{name}}
                {{"welcome " + name}}
                <br>{{"welcome " + name.length}}
                <br>{{greetUser()}}
              </div>
            
            <hr>
            Property Binding SYMBOL []
              <div class="content"> 
                <input type="text" value="{{prop}}">            
                <br><input id="prop" type="text" value="{{prop}}">
                <br>setting the property disabled to false doesn't work; prop - property can be used to assign values to attribute 
                <br><input disabled="false" id="{{prop}}" type="text" value="{{prop}}">
                <br>use property binding 
                <br><input [disabled]="false" id="prop" type="text" value="{{prop}}">
                
                <br><input bind-disabled="false" id="prop" type="text" value="{{prop}}">
              </div>

            <hr>
            Class Binding - same as property binding
            <div class="content"> 
              <span class="success">{{name}} - usual way</span>  <br>
              <span [class]="classbinding">{{name}} - class binding</span>  <br>
              <span [ngClass]="classbindingObject">{{name}} - ngClass : uses property name to get the class. This can be setted dynamically</span>  <br>
            </div>
          </div>
            `,
  // styleUrls: ['./test.component.css']
  styles: [`
    .success {
      color: green;
    }
    .failure {
      color: red;
    }
    .italictext {
      font-style: italic;
      background-color: pink;
    }
    .content {
      margin-left: 5%
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Sudhakar";
  public prop = "TestingPropertyBinding";
  public classbinding = "success"; //directly binded the class to an property named classbinding
  public isItalic = "true";
  public hasError = "false";
  public classbindingObject = {
                success : !this.hasError,
                failure : this.hasError,               
                italictext: this.isItalic
  };

  public interpolationSymbol = "{{}}";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "hello from the method greetUser";
  }

}
