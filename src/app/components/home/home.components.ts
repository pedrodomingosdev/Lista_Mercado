import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home.components',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.components.html',
  styleUrl: './home.components.css'
})
export class HomeComponents {
  novoProduto = '';           // texto digitado
  listaProdutos: string[] = [];  // lista de itens

  incluirProdutos() {
    if (this.novoProduto.trim()) {
      this.listaProdutos.push(this.novoProduto.trim());
    }
  }

  removerProdutos(index: number) {
      this.listaProdutos.splice(index, 1);
  }

  limparLista(){
    this.listaProdutos = []
  }
}
