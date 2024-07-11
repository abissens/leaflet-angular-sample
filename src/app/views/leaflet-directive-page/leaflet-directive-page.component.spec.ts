import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletDirectivePageComponent } from './leaflet-directive-page.component';

describe('LeafletDirectivePageComponent', () => {
  let component: LeafletDirectivePageComponent;
  let fixture: ComponentFixture<LeafletDirectivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafletDirectivePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafletDirectivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
