import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClassementComponent } from './page-classement.component';

describe('PageClassementComponent', () => {
  let component: PageClassementComponent;
  let fixture: ComponentFixture<PageClassementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClassementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
