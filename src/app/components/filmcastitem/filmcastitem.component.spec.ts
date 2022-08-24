import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmcastitemComponent } from './filmcastitem.component';

describe('FilmcastitemComponent', () => {
  let component: FilmcastitemComponent;
  let fixture: ComponentFixture<FilmcastitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmcastitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmcastitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
