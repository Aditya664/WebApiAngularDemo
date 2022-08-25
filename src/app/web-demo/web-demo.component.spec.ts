import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDemoComponent } from './web-demo.component';

describe('WebDemoComponent', () => {
  let component: WebDemoComponent;
  let fixture: ComponentFixture<WebDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
