import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotaComponent } from './fota.component';

describe('FotaComponent', () => {
  let component: FotaComponent;
  let fixture: ComponentFixture<FotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
