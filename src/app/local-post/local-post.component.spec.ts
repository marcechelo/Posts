import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPostComponent } from './local-post.component';

describe('LocalPostComponent', () => {
  let component: LocalPostComponent;
  let fixture: ComponentFixture<LocalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
