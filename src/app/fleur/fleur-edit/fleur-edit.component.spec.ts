import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleurEditComponent } from './fleur-edit.component';

describe('FleurEditComponent', () => {
  let component: FleurEditComponent;
  let fixture: ComponentFixture<FleurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
