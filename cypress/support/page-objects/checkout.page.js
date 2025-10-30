import { faker } from '@faker-js/faker';

class CheckoutPage {
  preencherDadosFaker() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const address = faker.location.streetAddress();
    const city = faker.location.city();
    const postcode = faker.location.zipCode('########'); 
    const phone = faker.phone.number('11#########');

    
    cy.get('#billing_first_name, input[name="billing_first_name"]').clear().type(firstName);
    cy.get('#billing_last_name, input[name="billing_last_name"]').clear().type(lastName);
    cy.get('#billing_email, input[name="billing_email"]').clear().type(email);
    cy.get('#billing_phone, input[name="billing_phone"]').clear().type(phone);
    cy.get('#billing_address_1, input[name="billing_address_1"]').clear().type(address);
    cy.get('#billing_city, input[name="billing_city"]').clear().type(city);
    cy.get('#billing_postcode, input[name="billing_postcode"]').clear().type(postcode);

    
    cy.get('#billing_country, select[name="billing_country"]').then($sel => {
      if ($sel.length) cy.wrap($sel).select(0); 
    });

    cy.get('#billing_state, select[name="billing_state"]').then($sel => {
      if ($sel.length) cy.wrap($sel).select(0);
    });
  }

  finalizarPedido() {
    
    cy.get('input[id^="payment_method"], .payment_methods input[type="radio"]').first().check({force:true});
    
    cy.get('#place_order, button[type="submit"]').contains(/finalizar pedido|completar compra/i).first().click();
  }

  validarPedidoConfirmado() {
    cy.contains(/obrigado|pedido recebido/i, { timeout: 20000 }).should('be.visible');
  }
}

export default new CheckoutPage();
