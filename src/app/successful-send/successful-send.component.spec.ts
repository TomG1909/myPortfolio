import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSendComponent } from './successful-send.component';

describe('SuccessfulSendComponent', () => {
  let component: SuccessfulSendComponent;
  let fixture: ComponentFixture<SuccessfulSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
