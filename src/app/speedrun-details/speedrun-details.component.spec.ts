import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedrunDetailsComponent } from './speedrun-details.component';

describe('SpeedrunDetailsComponent', () => {
  let component: SpeedrunDetailsComponent;
  let fixture: ComponentFixture<SpeedrunDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedrunDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedrunDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
