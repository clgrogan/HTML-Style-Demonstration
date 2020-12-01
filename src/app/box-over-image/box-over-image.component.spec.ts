import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOverImageComponent } from './box-over-image.component';

describe('BoxOverImageComponent', () => {
  let component: BoxOverImageComponent;
  let fixture: ComponentFixture<BoxOverImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxOverImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxOverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
