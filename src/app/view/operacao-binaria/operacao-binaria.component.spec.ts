import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacaoBinariaComponent } from './operacao-binaria.component';

describe('OperacaoBinariaComponent', () => {
  let component: OperacaoBinariaComponent;
  let fixture: ComponentFixture<OperacaoBinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacaoBinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacaoBinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
