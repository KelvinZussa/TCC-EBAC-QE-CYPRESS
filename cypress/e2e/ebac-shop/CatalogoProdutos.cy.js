///<reference types="cypress"/>

describe('Catálogo de Produtos', () => {

  beforeEach(() => {
    cy.visit('produtos')
  });

  it('CT001 - Verificar produtos na listagem', () => {
    cy.get('[class*="product-block"]').contains('a', 'Abominable Hoodie').should('exist')
    cy.get('[class*="product-block"]').contains('a', 'Aero Daily Fitness Tee').should('exist')
    cy.get('[class*="product-block"]').contains('a', 'Aether Gym Pant').should('exist')
  })

  it('CT004 – Ordenar produtos por preço (menor para maior)', () => {

    cy.get('.orderby').select('price')
    cy.wait(100)
    cy.get('.price .amount').first().should('contain', 'R$18')
    cy.get('.price .amount').eq(3).should('contain', 'R$20')
    cy.get('.price .amount').eq(4).should('contain', 'R$22')
    cy.get('.price .amount').eq(5).should('contain', 'R$24')

  });


})

