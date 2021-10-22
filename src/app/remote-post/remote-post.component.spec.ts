import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotePostComponent } from './remote-post.component';

describe('RemotePostComponent', () => {
  let component: RemotePostComponent;
  let fixture: ComponentFixture<RemotePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemotePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
