/// <reference types="cypress" />

import produtosPage from '../support/page-objects/produtos.page';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/produtos')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.efetuarPedidoProdutos(["Autumn Pullie", "Caesar Warm-Up Pant"]);
      cy.get('.cart_item, .woocommerce-cart-form__cart-item').should('have.length.at.least', 1);
      cy.get('a[href*="checkout"], .checkout-button, .wc-proceed-to-checkout a, .proceed-to-checkout').first().click();
      cy.preencherCheckoutComFaker();
      cy.finalizarCompra();

      
  });


})