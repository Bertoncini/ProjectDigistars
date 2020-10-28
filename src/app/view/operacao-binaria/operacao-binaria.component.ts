import { Component, OnInit } from '@angular/core';
import { ConvertsService } from 'src/app/services/converts.service';

@Component({
  selector: 'app-operacao-binaria',
  templateUrl: './operacao-binaria.component.html',
  styleUrls: ['./operacao-binaria.component.css']
})
export class OperacaoBinariaComponent implements OnInit {

  msgErroBinarioA: string = "Preencha este campo."
  msgErroBinarioB: string = "Preencha este campo."

  binarioA: string
  binarioB: string
  resultadoString: string
  resultadoBinario: string
  operador: string

  constructor(public conversor: ConvertsService) { }

  ngOnInit(): void {
  }

  limpar = () => {
    this.binarioA = ""
    this.binarioB = ""
    this.resultadoString = ""
    this.resultadoBinario = ""
    this.operador = ""
  }

  calcular = (operador: string) => {
    this.operador = operador;
    if (!this.camposPreenchidos())
      return

    if (["+", "-", "*", "/", "%"].includes(operador) == false) {
      console.log("Operador informado não esta configurado!")
      return;
    }

    let valorA = this.conversor.binaryToInt(this.binarioA);
    let valorB = this.conversor.binaryToInt(this.binarioB);

    let result;
    switch (operador) {
      case "+":
        result = valorA + valorB
        break;
      case "-":
        result = valorA - valorB
        break;
      case "*":
        result = valorA * valorB
        break;
      case "/":
        result = valorA / valorB
        break;
      case "%":
        result = valorA % valorB
        break;
      default:
        break;
    }

    if (isNaN(result))
      result = 0;

    this.resultadoBinario = this.conversor.intToBinary(result);
  }

  validarBinarioA = (binario: string): boolean => {
    var result = this.binarioValido(binario)

    if (result == false)
      this.msgErroBinarioA = "Informe um número binário válido."

    return result
  }

  validarBinarioB = (binario: string): boolean => {
    var result = this.binarioValido(binario)
    if (result === false)
      this.msgErroBinarioB = "Informe um número binário válido."

    return result
  }

  camposPreenchidos() {
    return (this.validarBinarioA(this.binarioA) && this.validarBinarioB(this.binarioB))
  }

  binarioValido = (binario: string): boolean => {
    return binario?.length == 8 && binario?.split('').every((v) => v.includes("0") || v.includes("1"));
  }

}
