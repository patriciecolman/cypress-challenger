describe('Insert Account', () => {
    context('Positive Scenarios', () => {
        it('Insert Account', () => {
            cy.visit('https://barrigareact.wcaquino.me')
            cy.url().should('eq', 'https://barrigareact.wcaquino.me/login')
            cy.contains('Registrar').click()
            cy.url().should('eq', 'https://barrigareact.wcaquino.me/registro')
            cy.get('input[placeholder="Nome"]').type('Patricia')
            cy.get('input[placeholder="Email"]').type('patricie.lope@hotmail.com')
            cy.get('input[placeholder="Senha"]').type('Paty123456')
            cy.intercept({
                method: 'POST',
                url: '**/usuarios'
            }).as('registerResponse')
            cy.contains('button', 'Registrar').click()
            cy.wait('@registerResponse').then((response) => {
                expect(response.response.body.detail).to.be.equal("Key (email)=(patricie.lope@hotmail.com) already exists.")
            })
            cy.get('.toast-message').contains('Erro: Error: Request failed with status code 500')
            cy.get('.toast').should('have.css', 'background-color', 'rgb(189, 54, 47)')

        })
    })
})