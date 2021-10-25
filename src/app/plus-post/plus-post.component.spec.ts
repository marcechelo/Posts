import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusPostComponent } from './plus-post.component';

describe('PlusPostComponent', () => {
  let component: PlusPostComponent;
  let fixture: ComponentFixture<PlusPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
