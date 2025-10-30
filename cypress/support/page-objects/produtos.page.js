class ProdutosPage {
  visitar() {
    cy.visit('/produtos');
  }
  buscarProduto(nomeProduto) {
  cy.get('[name="s"]').eq(1).type(nomeProduto)
    
  }

  buscarProdutoPorNome(nomeProduto){
    cy.get('.woocommerce-loop-product__title')
    .contains(nomeProduto, { matchCase: false })
    .click()
  }
 
   buscarProdutosLista(nomeProduto) { 
cy.get('.products .name').contains(nomeProduto) .click() 
}

   adicionarAoCarrinho() {
    cy.get('button, .single_add_to_cart_button')
      .contains(/adicionar ao carrinho|add to cart|comprar/i)
      .first()
      .click();
  }
 abrirCarrinho() {
    cy.get('a[href*="cart"], .cart-contents, .menu-item-cart').first().click();
  }
}

export default new ProdutosPage();
