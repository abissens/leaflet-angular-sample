import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletPageComponent } from './leaflet-page.component';

describe('LeafletPageComponent', () => {
  let component: LeafletPageComponent;
  let fixture: ComponentFixture<LeafletPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafletPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
