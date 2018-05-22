import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpdfComponent } from './epdf.component';

describe('EpdfComponent', () => {
  let component: EpdfComponent;
  let fixture: ComponentFixture<EpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
