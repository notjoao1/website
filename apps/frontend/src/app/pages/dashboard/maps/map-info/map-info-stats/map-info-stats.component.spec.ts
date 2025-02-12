import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapInfoStatsComponent } from './map-info-stats.component';

describe('MapInfoStatsComponent', () => {
  let component: MapInfoStatsComponent;
  let fixture: ComponentFixture<MapInfoStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MapInfoStatsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInfoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
