import { Component } from '@angular/core';
import * as data from '../../assets/images/data.json';
import styled from '@emotion/styled';

// Defina o componente estilizado para o título "Projetos"
const StyledTituloProjetos = styled.h2`
  color: red;
  font-size: 24px;
  // Adicione outros estilos conforme necessário
`;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  jsonData: any;

  constructor() { }

  ngOnInit(): void {
    // Carregar os dados JSON e atribuí-los à variável jsonData
    this.jsonData = data;
    console.log(this.jsonData); // Exemplo de como você pode usar os dados JSON
  }
}
