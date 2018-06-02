import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeAppComponent } from './anime-app.component';

describe('AnimeAppComponent', () => {
  let component: AnimeAppComponent;
  let fixture: ComponentFixture<AnimeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
