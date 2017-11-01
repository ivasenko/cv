import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksItemComponent } from './works-item.component';

describe('WorksItemComponent', () => {
  let component: WorksItemComponent;
  let fixture: ComponentFixture<WorksItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
