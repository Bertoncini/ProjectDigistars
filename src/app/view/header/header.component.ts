import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resources: any = [{ name: 'Conjunto', path: '/conjunto' }, { name: 'Operações Binarias', path: '/operacaoBinaria' }, { name: 'Dashboard', path: '/dashboard' }];

  constructor() { }

  ngOnInit(): void {
  }

}
