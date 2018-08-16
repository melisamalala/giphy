import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyFormComponent } from './giphy-form.component';

describe('GiphyFormComponent', () => {
  let component: GiphyFormComponent;
  let fixture: ComponentFixture<GiphyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
