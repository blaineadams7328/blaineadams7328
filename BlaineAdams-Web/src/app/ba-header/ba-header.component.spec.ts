import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BaHeaderComponent } from './ba-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

describe('BaHeaderComponent', () => {
  let component: BaHeaderComponent;
  let fixture: ComponentFixture<BaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaHeaderComponent ],
      imports: [MatToolbarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text BlaineAdamsHere in header', () => {
    const fixture = TestBed.createComponent(BaHeaderComponent);
    const headerElement = fixture.debugElement.nativeElement;
    expect(headerElement.querySelector('#header-owner').textContent).toContain('BlaineAdamsHere');
  });
});
