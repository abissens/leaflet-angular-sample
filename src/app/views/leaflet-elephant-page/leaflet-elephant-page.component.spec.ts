import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletElephantPageComponent } from './leaflet-elephant-page.component';

describe('LeafletElephantPageComponent', () => {
  let component: LeafletElephantPageComponent;
  let fixture: ComponentFixture<LeafletElephantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafletElephantPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafletElephantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
