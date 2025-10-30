Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

import produtosPage from './page-objects/produtos.page';
import checkoutPage from './page-objects/checkout.page';


Cypress.Commands.add('efetuarPedidoProdutos', (nomesProdutos = []) => {
  nomesProdutos.forEach((nome) => {
    produtosPage.buscarProdutoPorNome(nome);
    produtosPage.adicionarAoCarrinho();
    cy.visit('/');
  });

  produtosPage.abrirCarrinho();
});

Cypress.Commands.add('preencherCheckoutComFaker', () => {
  checkoutPage.preencherDadosFaker();
});

Cypress.Commands.add('finalizarCompra', () => {
  checkoutPage.finalizarPedido();
  checkoutPage.validarPedidoConfirmado();
});



