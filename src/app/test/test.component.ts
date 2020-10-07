import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import {EventEmitter} from "events";
// import {Output} from "@angular/compiler/src/core";

@Component({
  selector: '[app-test]',
  // templateUrl: './test.component.html',

  // {{}} = This is called as "Interpolation" (In AngularJs, expression)
  template: `
          <div>
            Component Interaction
            <div class="content">
              Parent to child
              <br>
              <span>{{parentData}}</span>
                <br><br>
              Child to parent
              <br>
              <span>This can only be achieved through events only</span>
              <br><button (click)="fireEvent()">Generate</button>
            </div>

            <hr>
            Property Binding SYMBOL []
            <div class="content">
                <input type="text" value="{{prop}}">
                <br><input id="prop" type="text" value="{{prop}}">
                <br>setting the property disabled to false doesn't work; prop - property can be used to assign values to attribute
                <br><input disabled="false" id="{{prop}}" type="text" value="{{prop}}">
                <br>use property binding -
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

            <hr>
            Style Binding - same as class property binding
            <div class="content">
              <span [style.color]="'orange'">style binding 1</span>
              <br><span [style.color]="hasError ? 'red' : 'green'">style binding 2 - using conditional operator</span>
              <br><span [ngStyle]="styleBindingObject">style binding 3 - using ngStyle</span>
            </div>

            <hr>
            Event binding - $event
            <div class="content">
              <button (click)="greetFunctionFromClick()">EventBinding</button> {{greeting}}
              <br>
              <button (click)="greetFunctionFromClickEvent($event)">ClickEventBinding</button> {{greetingUsingEvent}}
            </div>

            <hr>
            Template reference variable
            <div class="content">
              <input #myInput type="text">
              <button (click)="templateRef(myInput)">Log</button>{{ref}}
            </div>

            <hr>
            Two way binding
            <div class="content">
              <input [(ngModel)]="twoWayBinding" type="text">
              <br><span>{{twoWayBinding}}</span>
            </div>

            <hr>
            Structural Directive - *ngIf
            <div class="content">
              *ngIf - Used to dynamically choose between two html elements
              <br>
              <span *ngIf="ifDirective1; else elseTemp">Method 1: if</span>
              <ng-template #elseTemp>
                <span>Method 1: else</span>
              </ng-template>

              <br>

              <span *ngIf="ifDirective2; then ifBlock; else elseBlock"></span>

              <ng-template #ifBlock>
                <span>Method 2: if</span>
              </ng-template>

              <ng-template #elseBlock>
                <span>Method 2: else</span>
              </ng-template>
            </div>

            <hr>
            ngSwitch and ngFor
            <div class="content">
              <span>Both were similar to ngIf</span>
              <br><span>[ngSitch] - *ngSwitchCase, *ngSitchDefault</span>
              <br><span>*ngFor = "prop in properties" - can use this prop in interpolation</span>
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
  constructor() { }
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  name = 'Sudhakar';
  public prop = 'TestingPropertyBinding';
  public classbinding = 'success'; // directly binded the class to an property named classbinding
  public isItalic = 'true';
  public hasError = true;
  public classbindingObject = {
                success : !this.hasError,
                failure : this.hasError,
                italictext: this.isItalic
  };

  public interpolationSymbol = '{{}}';

  public styleBindingObject = {
    color: 'violet',
    fontStyle: 'italic'
  };

  public greeting;

  public greetingUsingEvent;

  public ref;

  twoWayBinding = '';
  public ifDirective1 = true;
  public ifDirective2 = false;
  // tslint:disable-next-line:typedef
  fireEvent() {
    this.childEvent.emit('child to parent communication through event');
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  greetUser() {
    return 'hello from the method greetUser';
  }
  // tslint:disable-next-line:typedef
  greetFunctionFromClick() {
    this.greeting = 'Hello Sudhakar';
  }
  greetFunctionFromClickEvent(event): void {
    this.greetingUsingEvent = event.type;
  }
  public templateRef(ref): void {
    console.log(ref);  // refers DOM Element and its properties
    this.ref = ref.value;   // dom value
  }

}
