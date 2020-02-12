import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsureComponentComponent } from './getsure-component.component';

describe('GetsureComponentComponent', () => {
  let component: GetsureComponentComponent;
  let fixture: ComponentFixture<GetsureComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsureComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
