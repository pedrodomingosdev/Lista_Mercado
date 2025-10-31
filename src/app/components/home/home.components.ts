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

  removerProdutos() {
    const valor = this.novoProduto.trim();
    this.listaProdutos = this.listaProdutos.filter(p => p !== valor);
  }
}
