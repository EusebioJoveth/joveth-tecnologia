import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiiceComponent } from './serviice.component';

describe('ServiiceComponent', () => {
  let component: ServiiceComponent;
  let fixture: ComponentFixture<ServiiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
