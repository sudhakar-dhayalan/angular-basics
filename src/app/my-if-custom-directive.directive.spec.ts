import { MyIfCustomDirectiveDirective } from './my-if-custom-directive.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('MyIfCustomDirectiveDirective', () => {
  it('should create an instance', () => {
    let directive: MyIfCustomDirectiveDirective;
    // @ts-ignore
    directive = new MyIfCustomDirectiveDirective(TemplateRef, ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
