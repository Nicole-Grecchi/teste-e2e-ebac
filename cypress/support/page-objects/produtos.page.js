class ProdutosPage {
  visitar() {
    cy.visit('/produtos/page/2');
  }

  buscarProduto(nomeProduto) {
    cy.get('[name="s"]').eq(1).type(nomeProduto);
  }

  buscarProdutosLista(nomeProduto) {
    cy.get('.products .name').contains(nomeProduto).click();
  }

 addProdutoCarrinho(tamanho, cor, quantidade) {
  cy.log(`Tamanho: ${tamanho} | Cor: ${cor} | Qtd: ${quantidade}`);
  const tamanhoFormatado = tamanho.replace(/\s+/g, '-');
  const corFormatada = cor.replace(/\s+/g, '-');
  cy.get('.button-variable-item', { timeout: 10000 }).should('exist');
  cy.get(`.button-variable-item-${tamanhoFormatado}`).click();
  cy.get(`.button-variable-item-${corFormatada}`).click();
  cy.get('.input-text').clear().type(quantidade);
  cy.get('.single_add_to_cart_button').click();
}


  abrirCarrinho() {
  cy.get('.woocommerce-message', { timeout: 10000 })
    .should('contain', 'foi adicionado no seu carrinho')
    .within(() => {
      cy.get('a').contains('Ver carrinho').click();
    });
}

}

export default new ProdutosPage();

