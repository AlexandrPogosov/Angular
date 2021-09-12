import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarpshipsComponent } from './starpships.component';

describe('StarpshipsComponent', () => {
  let component: StarpshipsComponent;
  let fixture: ComponentFixture<StarpshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarpshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarpshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
