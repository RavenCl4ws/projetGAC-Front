import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncartProfilComponent } from './encart-profil.component';

describe('EncartProfilComponent', () => {
  let component: EncartProfilComponent;
  let fixture: ComponentFixture<EncartProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncartProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncartProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
