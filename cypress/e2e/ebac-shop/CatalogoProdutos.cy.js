///<reference types="cypress"/>

describe('Catálogo de Produtos', () => {
  it('CT001 - Verificar produtos na listagem', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('#primary-menu > .menu-item-629 > a').click()

    // Verifica pelos nomes sem depender dos IDs
    cy.get('[class*="product-block"]').contains('a', 'Abominable Hoodie').should('exist')
    cy.get('[class*="product-block"]').contains('a', 'Aero Daily Fitness Tee').should('exist')
    cy.get('[class*="product-block"]').contains('a', 'Aether Gym Pant').should('exist')
  })
})

