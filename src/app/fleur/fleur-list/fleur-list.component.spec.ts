import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleurListComponent } from './fleur-list.component';

describe('FleurListComponent', () => {
  let component: FleurListComponent;
  let fixture: ComponentFixture<FleurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
