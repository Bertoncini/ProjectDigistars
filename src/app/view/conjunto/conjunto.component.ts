import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-conjunto',
  templateUrl: './conjunto.component.html',
  styleUrls: ['./conjunto.component.css']
})

export class ConjuntoComponent implements OnInit {
  @ViewChild('stepper', { static: false })
  stepper: MatStepper;
  entradaN: number;
  entradaK: any = [];
  previewEntrada: any = [];
  previewSaida: any = [];

  constructor() { }

  ngOnInit() {
  }

  bloqueiaNavegacao = () => this.stepper.selected.completed = false;

  voltar() {
    this.stepper.previous();
    this.stepper.selected.completed = false;
  }

  avancar() {
    if (this.stepper.selectedIndex === 0) {
      if (this.validarEntradaN()) {
        if (this.entradaN < this.entradaK?.length)
          this.entradaK = [];
        this.stepper.selected.completed = true;
        this.stepper.next();
      }
    }
    else if (this.stepper.selectedIndex === 1) {
      let qtdPreenchida = this.entradaK?.length;
      if (this.entradaN > qtdPreenchida) {
        alert(`Falta informar mais ${this.entradaN - qtdPreenchida} valores para continuar`)
        return;
      }
      this.processarSaida();
      this.stepper.selected.completed = true;
      this.stepper.next();
    }
    else {
      this.stepper.selected.completed = true;
      this.stepper.next();
    }
  }

  validarValorEntre = (inicio, fim, valor) => valor >= inicio && valor <= fim;

  validarEntradaN(): boolean {
    if (!this.entradaN || this.validarValorEntre(1, 1000, this.entradaN) == false) {
      alert('O Valor de Entrada N deve estar entre 1 e 1000!')
      return false;
    }
    return true;
  }

  adicionarEntradaK(valor) {
    if (this.entradaK.length < this.entradaN) {
      var valork = parseInt(valor.target.value);
      if (!valork || this.validarValorEntre(-1000, 1000, valork) == false) {
        alert('O Valor de Entrada K deve estar entre -1000 e 1000!')
      }
      else
        this.entradaK.push(valork);
    }
    else {
      alert('Atingiu a quantidade de valores K!')
      this.processarSaida();
      this.stepper.selected.completed = true;
      this.stepper.next();
    }
  }

  processarSaida() {
    this.previewSaida = this.entradaK.filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b);
    this.previewEntrada = []
    this.previewEntrada.push(this.entradaN);
    this.previewEntrada = this.previewEntrada.concat(this.entradaK);
  }

}
