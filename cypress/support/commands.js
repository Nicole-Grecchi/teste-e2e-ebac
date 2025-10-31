import produtosPage from './page-objects/produtos.page';
import checkoutPage from './page-objects/checkout.page';

Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#username').type(usuario);
  cy.get('#password').type(senha, { log: false });
  cy.get('.woocommerce-form > .button').click();
});

Cypress.Commands.add('efetuarPedidoProdutos', (produtos = []) => {
  produtos.forEach((produto) => {
    produtosPage.buscarProdutosLista(produto.nome);
    produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
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


