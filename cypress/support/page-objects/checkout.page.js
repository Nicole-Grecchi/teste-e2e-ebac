import { faker } from '@faker-js/faker';

class CheckoutPage {
  preencherDadosFaker() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const address = faker.location.streetAddress();
    const city = faker.location.city();
    const postcode = faker.location.zipCode('########'); 
    const phone = faker.string.numeric(11);


    cy.get('#billing_first_name').clear().type(firstName);
    cy.get('#billing_last_name').clear().type(lastName);
    cy.get('#billing_email').clear().type(email);
    cy.get('#billing_phone').clear().type(phone);
    cy.get('#billing_address_1').clear().type(address);
    cy.get('#billing_city').clear().type(city);
    cy.get('#billing_postcode').clear().type(postcode);

    cy.get('#select2-billing_country-container').click({ force: true });
    cy.get('.select2-results__option').contains('Brasil').click({ force: true });
    cy.get('#select2-billing_state-container').click({ force: true });
    cy.get('.select2-results__option').contains('São Paulo').click({ force: true });
  }
  
  finalizarPedido() {
  cy.get('input[id^="payment_method"], .payment_methods input[type="radio"]').first().check({ force: true });
  cy.get('#terms').check({ force: true });
  cy.get('#place_order, .checkout-button, button[type="submit"]')
    .contains(/finalizar compra|finalizar pedido|completar compra/i)
    .click({ force: true });}

validarPedidoConfirmado() {
  cy.contains(/obrigado|pedido recebido/i, { timeout: 20000 }).should('be.visible');
}
 }
export default new CheckoutPage();

