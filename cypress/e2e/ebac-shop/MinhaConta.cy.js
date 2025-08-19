///<reference types="cypress"/>

describe('Painel Minha Conta', () => {

    beforeEach(() => {
         cy.visit('minha-conta')
    });
   
    it('CT002 – Logout ao clicar em “Sair”', () => {
        cy.login('kelvinzus4@gmail.com', 'Teste@1234')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
         cy.get('.woocommerce-form-login').should('be.visible')
         cy.get('.woocommerce-MyAccount-navigation').should('not.exist')
         cy.contains('Login').should('be.visible')
    });

it('CT003 – Credenciais incorretas', () => {
    cy.login('kelvinzus4@gmail.com', 'Teste@123')
     cy.get('.woocommerce-error')
      .should('be.visible')
      .and('contain', 'A senha fornecida para o e-mail kelvinzus4@gmail.com está incorreta')
      .and('contain', 'Perdeu a senha?')
});

});


