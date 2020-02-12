import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisoreComponent } from './kisore.component';

describe('KisoreComponent', () => {
  let component: KisoreComponent;
  let fixture: ComponentFixture<KisoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
