import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyviewComponent } from './giphyview.component';

describe('GiphyviewComponent', () => {
  let component: GiphyviewComponent;
  let fixture: ComponentFixture<GiphyviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
