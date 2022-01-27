import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeComponent } from './change.component';

describe('ChangeComponent', () => {
  let component: ChangeComponent;
  let fixture: ComponentFixture<ChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should change the name and age when clicked", () => {
    //förbereda
    expect(component.name.done).toBeFalse()
    
    //Agera
    component.toggle()
    //verifiera
    expect(component.name.done).toBeTrue()

  })
  it("should change many times", () => {
    //förbereda
    expect(component.name.done).toBeFalse()
    
    //Agera
    component.toggle()
    //verifiera
    expect(component.name.done).toBeTrue()
    component.toggle();
    expect(component.name.done).toBeFalse();
  })


});
