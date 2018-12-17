import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLoopComponent } from './media-loop.component';

describe('MediaLoopComponent', () => {
  let component: MediaLoopComponent;
  let fixture: ComponentFixture<MediaLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
