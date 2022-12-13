import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretViewComponent } from './secret-view.component';

describe('SecretViewComponent', () => {
  let component: SecretViewComponent;
  let fixture: ComponentFixture<SecretViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
