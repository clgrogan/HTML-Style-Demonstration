import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgOverBoxComponent } from './img-over-box.component';

describe('ImgOverBoxComponent', () => {
  let component: ImgOverBoxComponent;
  let fixture: ComponentFixture<ImgOverBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgOverBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgOverBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
