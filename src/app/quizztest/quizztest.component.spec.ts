import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizztestComponent } from './quizztest.component';

describe('QuizztestComponent', () => {
  let component: QuizztestComponent;
  let fixture: ComponentFixture<QuizztestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizztestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizztestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
