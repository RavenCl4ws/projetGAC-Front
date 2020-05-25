import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouvrirComponent } from './decouvrir.component';

describe('DecouvrirComponent', () => {
  let component: DecouvrirComponent;
  let fixture: ComponentFixture<DecouvrirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecouvrirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecouvrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
