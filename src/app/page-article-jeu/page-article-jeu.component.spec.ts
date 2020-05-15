import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArticleJeuComponent } from './page-article-jeu.component';

describe('PageArticleJeuComponent', () => {
  let component: PageArticleJeuComponent;
  let fixture: ComponentFixture<PageArticleJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArticleJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArticleJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
