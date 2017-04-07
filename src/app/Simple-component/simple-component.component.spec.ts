import { SimpleComponent } from './simple-component.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [SimpleComponent]
    }).createComponent(SimpleComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have an initial subject value', () => {
    expect(component.subject).toBe('world');
  });

  it('should render subject', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('Hello world!');
  });

  it('should render the updated subject', () => {
    component.subject = 'developer';
    fixture.detectChanges();
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('Hello developer!');
  });

});
