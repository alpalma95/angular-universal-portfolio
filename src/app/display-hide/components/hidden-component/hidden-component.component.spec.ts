import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenComponentComponent } from './hidden-component.component';

describe('HiddenComponentComponent', () => {
  let component: HiddenComponentComponent;
  let fixture: ComponentFixture<HiddenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
