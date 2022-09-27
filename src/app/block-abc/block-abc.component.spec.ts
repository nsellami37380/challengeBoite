import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockABCComponent } from './block-abc.component';

describe('BlockABCComponent', () => {
  let component: BlockABCComponent;
  let fixture: ComponentFixture<BlockABCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockABCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockABCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
