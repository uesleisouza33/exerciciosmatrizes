# Manipulação de Matrizes em JavaScript

Este projeto demonstra como manipular e percorrer matrizes bidimensionais utilizando JavaScript.  
O código cria e modifica duas matrizes (`matriz` e `matriz2`), aplicando regras específicas para alterar seus valores e, no segundo caso, calcular a soma de todos os elementos.

## 📜 Descrição do Código

### 1. Alteração por Colunas (`matriz`)
- Criamos uma matriz inicial 5x5.
- Substituímos todos os valores:
  - **Colunas ímpares** (índice `j` ímpar) recebem o valor `3`.
  - **Colunas pares** (índice `j` par) recebem o valor `5`.
- O resultado é exibido com `console.table()`.

### 2. Alteração por Linhas e Soma (`matriz2`)
- Criamos outra matriz 5x5.
- Substituímos todos os valores:
  - **Linhas pares** (índice `i` par) recebem o valor `7`.
  - **Linhas ímpares** (índice `i` ímpar) recebem o valor `3`.
- Criamos uma função `somarMatriz(matriz)` que soma todos os elementos da matriz e retorna o total.
- O resultado da soma é exibido no console.

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
2. cd nome-do-repositorio
3. node exerciciosMatrizes.js
