import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleurNewComponent } from './fleur-new.component';

describe('FleurNewComponent', () => {
  let component: FleurNewComponent;
  let fixture: ComponentFixture<FleurNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleurNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleurNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
