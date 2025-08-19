class CatalogoPage {
    visit() {
        cy.visit('http://lojaebac.ebaconline.art.br/');
    }

    acessarListagemProdutos() {
        cy.get('#primary-menu > .menu-item-629 > a').click();
    }

    verificarProdutoNaLista(nomeProduto) {
        cy.contains('.product-name', nomeProduto).should('exist');
    }

    
}

export default new CatalogoPage();